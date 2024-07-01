import Users from '@/app/(models)/User';
import { NextResponse } from 'next/server';

export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const farmerData = body.farmerData;

        const result = await Users.findOneAndUpdate(
            { 'favoriteFarmers._id': farmerData._id }, 
            { $pull: { favoriteFarmers: { _id: farmerData._id } }},
            { new: true });

        return NextResponse.json({ message: "Favorite Deleted" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};