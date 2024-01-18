import { NextRequest, NextResponse } from "next/server";

// This function handles HTTP GET requests to the API route.

export async function GET() {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        );
        response.cookies.set(`${process.env.COOKIE_KEY}`, "",
        { httpOnly: true, expires: new Date(0)
        })

        return response;
        
    } catch (error : any) {
        return NextResponse.json({ error: error.message},
            {status: 500});
    }
    
}