import { verify } from '@dfordp1101/custom-jwt-lib';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request : NextRequest) {
  try {
      const token = request.headers.get("Authorization");

    if (!token) {
      return NextResponse.json("UnAuthorized",{status:400});
    }

    if (typeof process.env.NEXT_PUBLIC_AUTH_SECRET !== "string") {
      // Handle the case where secret is undefined
      throw new Error('Authentication secret is not configured properly.');
    }

    verify({
      token : token,
      secret : process.env.NEXT_PUBLIC_AUTH_SECRET
    });


    return NextResponse.next();
  } catch (error) {
    if (error.message === 'Invalid signature') {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }else {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
}


export const config = {
    matcher: ['/api/user/:path*'],
  }