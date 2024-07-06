import Users from '@/app/(models)/User';
import { NextResponse } from 'next/server';

export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const farmerData = body.farmerData;
        const data = await Users.findOneAndUpdate({ _id: id }, { $addToSet: { favoriteFarmers: farmerData } }, { new: true });
        return NextResponse.json({ message: "Farmer is now part of favorites" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};