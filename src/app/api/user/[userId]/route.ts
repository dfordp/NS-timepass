import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams{
    userId : string
}

export async function GET(request: Request , {params} : { params: IParams } ){
    try {
        const { userId } = params;

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        const user = await client.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.error();
    }

}