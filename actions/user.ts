"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import { getServerSession } from "next-auth/next"

export async function updateUser() {
    try {
        await connectDB();

        const session = await getServerSession();

        const farmers = await Farmer.updateOne({
            email: session?.user.email
        })
        return farmers
    } catch (error) {
        console.log(error)
        return error
    }
};