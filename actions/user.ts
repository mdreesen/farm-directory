"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next"

export async function updateUser(values: any) {
    const { email } = values;

    try {
        await connectDB();

        const user = await User.findOneAndUpdate({ email: email }, {
            ...values
        });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function saveFarmer(values: any) {
    const { _id, email } = values;

    try {
        await connectDB();
        const user = await User.findOneAndUpdate({ _id: _id }, { $addToSet: { favoriteFarmers: values } }, { new: true });
    } catch (e) {
        console.log(e)
        return e
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