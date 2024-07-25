import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
	try {
		// Fetch all users from the database
		const users = await client.user.findMany();
		
		// Return the users in the response
		return NextResponse.json(users);
	} catch (error) {
		// Handle any errors that occur during the fetch
		return NextResponse.error();
	}
}
