import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// This video may be a good example for Mongo Queries
// https://www.youtube.com/watch?v=XRXjJRJ03_A&ab_channel=MongoDB

// Get Single Farmer By ID
export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const productData = body?.formData;

        const farmerProduct = await Farmer.findByIdAndUpdate(
            // Grabbing the product with the ID
            { 'products._id': productData },
            // Go into the orders and setting new values
            { $pull: { 'products': { _id: id } } },
            { new: true }
        );

        return NextResponse.json({ message: "Product Deleted" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};
