import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// Creating Farmer
export async function POST(req) {
    try {
        const body = await req.json();
        const farmerData = body.formData;
        await Farmer.create(farmerData);

        return NextResponse.json({ message: "Farmer Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}