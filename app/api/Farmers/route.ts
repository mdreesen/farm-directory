import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// Get All Farmers
export async function GET() {
    try {
        const farmers = await Farmer.find();
        return NextResponse.json({ farmers }, { status: 200 });

    } catch(error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

// Creating Farmer
export async function POST(req: any) {
    try {
        const body = await req.json();
        const { email, first_name, address_zip, agree_to_legal, agree_to_privacy_policy } = body.formData;
        await Farmer.create({ email, first_name, address_zip, agree_to_legal: true, agree_to_privacy_policy: true });

        return NextResponse.json({ message: "Farmer Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

// Deleting A Farmer
export async function DELETE(req: any, { params }: any) {
    try {
        const { id } = params;
        await Farmer.findByIdAndDelete(id);
        return NextResponse.json({ message: "Farmer Deleted" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}