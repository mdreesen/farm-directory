import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// This video may be a good example for Mongo Queries
// https://www.youtube.com/watch?v=XRXjJRJ03_A&ab_channel=MongoDB

export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const productData = body?.formData;

        const farmer = await Farmer.findOneAndUpdate({ _id: id }, { $addToSet: { products: productData } }, { new: true });

        return NextResponse.json({ message: "Products Updated" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};
