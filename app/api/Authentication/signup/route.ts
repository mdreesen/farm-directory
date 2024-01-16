import { NextResponse } from 'next/server';
import User from '@/app/(models)/User';
import bcrypt from 'bcryptjs';

// Creating user during signup
export async function POST(req: any) {
    try {
        const body = await req.json();
        const { email, password, isFarmer, isAdmin } = body.formData;

        // Hashing password for the signed up user
        const hashPassword = await bcrypt.hash(password, 12);

        await User.create({ email, password: hashPassword, isFarmer, isAdmin });

        return NextResponse.json({ message: "User Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};