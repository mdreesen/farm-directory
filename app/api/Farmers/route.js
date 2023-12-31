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
export async function POST(req) {
    try {
        const body = await req.json();
        const farmerData = body.formData;
        await Farmer.create(farmerData);

        return NextResponse.json({ message: "Farmer Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

// Creating Farmer
export async function POST(req) {
    try {
        const { id } = params;

        const body = await req.json();
        const farmerData = body.formData;
        const singleFarmer = await Farmer.findOneAndUpdate(id);

        { $push: { products: farmerData } };

        return NextResponse.json({ message: "Products Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

// Deleting A Farmer
export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Farmer.findByIdAndDelete(id);
        return NextResponse.json({ message: "Farmer Deleted" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}