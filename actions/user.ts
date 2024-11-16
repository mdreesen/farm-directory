"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import bcrypt from "bcryptjs";
import { revalidatePath } from 'next/cache'

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

export async function updateUserPassword(values: any) {
    const { token, password, confirm_password } = values;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (confirm_password !== password) {
        return {
            error: 'Passwords do not match'
        }
    }

    try {
        await connectDB();

        const user = await User.findOneAndUpdate({ resetPasswordToken: token }, {
            password: hashedPassword
        });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function saveFarmer({ data }: any) {
    const session = await getServerSession();
    try {
        await connectDB();
        const user = await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { favoriteFarmers: data } }, { new: true });
        revalidatePath('/');
    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteSavedFarmer({ data }: any) {
    try {
        await connectDB();
        const user = await User.findOneAndUpdate(
            { 'favoriteFarmers._id': data._id }, 
            { $pull: { favoriteFarmers: { _id: data._id } }},
            { new: true });
        revalidatePath('/');

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function isSavedFarmer(values: any) {
    const { farmer } = values
    const session = await getServerSession();

    try {
        await connectDB();
        const user = await User.findOne({ email: session?.user.email });
        const saved = user.favoriteFarmers.filter((item: any) => item._id === farmer._id).length;

        return saved >= 1 ? 'saved' : 'not_saved'
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