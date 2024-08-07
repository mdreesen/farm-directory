import { NextResponse } from 'next/server';
import User from '@/app/(models)/User';
import Farmer from '@/app/(models)/Farmer';

import bcrypt from 'bcryptjs';

// Creating user during signup
export async function POST(req: any) {
    try {
        const body = await req.json();

        const { number, street, city, postalCode, state, county, latitude, longitude, formattedAddress} = body;
        const { email, password, isFarmer, isAdmin } = body.formData;
        const farmer = await Farmer.findOne({ email })

        // Hashing password for the signed up user
        const hashPassword = await bcrypt.hash(password, 12);

        // If farmer is found, set "isFarmer" boolean to true
        if (farmer) {
            await User.create({ email, password: hashPassword, isFarmer: true, agree_to_legal: true, agree_to_privacy_policy: true });
            return NextResponse.json({ message: "Farmer User Created" }, { status: 201 })
        }

        await User.create({ email, password: hashPassword, isFarmer, isAdmin, houseNumber: number, street, city, postalCode, state, county, latitude, longitude, formattedAddress, agree_to_legal: true, agree_to_privacy_policy: true });

        return NextResponse.json({ message: "User Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};