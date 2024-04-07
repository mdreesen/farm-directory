import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// This video may be a good example for Mongo Queries
// https://www.youtube.com/watch?v=XRXjJRJ03_A&ab_channel=MongoDB

// Get Single Farmer By ID
export async function GET(req: any, { params }: any) {
    try {
        const farmer = await Farmer.find({});
        return NextResponse.json({ farmer }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

// Get Single Farmer By ID
export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const productData = body?.formData;

        const farmer = await Farmer.updateMany(id, {$addToSet: {products: productData} });

        return NextResponse.json({ message: "Products Updated" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

export async function DELETE(req: any, { params }: any) {
    try {
        const { id } = params;
        await Farmer.findByIdAndDelete(id);

        return NextResponse.json({ message: "Farmer Deleted" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};