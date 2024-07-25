// import bcrypt from "bcrypt";


import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { sign } from "@dfordp1101/custom-jwt-lib";
import { authentication, random } from "../../../../helpers";

export async function POST(  request: Request){
    try {
        const body = await request.json();
        const {
            email,
            password
          } = body;
        
          if(!email || !password){
            return new NextResponse('Missing info', {status:400})
          }

          const rand = await random()

          const hashedPassword = await authentication(rand,password);

          const user = await client.user.create({
            data: {
              email,
              password: hashedPassword,
              salt : rand
            }
          });

          if (typeof process.env.NEXT_PUBLIC_AUTH_SECRET !== 'string') {
            // Handle the case where secret is undefined
            throw new Error('Authentication secret is not configured properly.');
          }

          const token =  sign({
            payload: { id: user.id }, 
            secret :  process.env.NEXT_PUBLIC_AUTH_SECRET,
            options: {}
          })

          return NextResponse.json({user,token});
        
    } catch (error) {
        return new NextResponse(error , {status : 400})
    }
}