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
        const farmer = await Farmer.findOne({ email: session?.user.email });
        const findImage = img[0];

        // If found farmer with email, update user and farmer
        if (farmer) {
            await User.findOneAndUpdate({ email: session?.user.email }, { image: findImage }, { new: true });
            await Farmer.findOneAndUpdate({ email: session?.user.email }, { image: findImage }, { new: true });
        }

        await User.findOneAndUpdate({ email: session?.user.email }, { image: findImage }, { new: true });

    } catch (error) {
        console.log(error);
    }
};