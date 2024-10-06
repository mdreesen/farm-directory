"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import User from "@/(models)/User";
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

export async function updateUserProfileImg(img: any) {
    try {
        await connectDB();

        const session = await getServerSession();

        const farmers = await Farmer.updateOne({
            email: session?.user.email
        });

        console.log('Uploading image to user', img);


        const user = await User.findOneAndUpdate({ email: session?.user.email }, { image: img }, { new: true });


    } catch (error) {
        console.log(error);
    }
};