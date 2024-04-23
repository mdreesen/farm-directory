import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// This video may be a good example for Mongo Queries
// https://www.youtube.com/watch?v=XRXjJRJ03_A&ab_channel=MongoDB

// This video helped out with updating objects in arrays for mongoose
// https://www.youtube.com/watch?v=aA_y3ewrnpI&ab_channel=CalebCurry

// Update single product in products
export async function PATCH(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const productData = body?.formData;

        const result = await Farmer.findOneAndUpdate(
            { 'products._id': id }, 
            { $set: { 'products.$': body?.formData }},
            { new: true });

        return NextResponse.json({ message: "Products Updated" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const productData = body?.formData;
        console.log('api', productData)

        const result = await Farmer.findOneAndUpdate(
            { 'products._id': id }, 
            { $pull: { products: { _id: id } }},
            { new: true });

            console.log(result)

        return NextResponse.json({ message: "Product Deleted" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};
