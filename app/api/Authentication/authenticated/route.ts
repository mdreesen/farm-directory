// src/app/api/users/me/route.ts

import User from "@/app/(models)/User";
import { getDataFromToken } from "@/app/lib/tokenData";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){
    try {

        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);

        // Find the user in the database based on the user ID
        const user = await User.findOne({_id: userId}).
        select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}