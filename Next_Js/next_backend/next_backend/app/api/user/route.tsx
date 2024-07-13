
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {

    const body = await req.json();
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    console.log(user.id);

    return Response.json({
        message: "You are logged in successfully"
    })
}

export async function GET() {
    try {
        const userData = await client.user.findFirst();

        if (!userData) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({
            username: userData.username,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}