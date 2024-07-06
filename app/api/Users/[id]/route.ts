import Users from '@/app/(models)/User';
import { NextResponse } from 'next/server';

// Get Single Farmer By ID
export async function GET(req: any, { params }: any) {
    try {
        const { id } = params;
        const data = await Users.findOne({ _id: id });
        return NextResponse.json({ data }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

export async function PUT(req: any, { params }: any) {
    try {
        const { id } = params;
        const body = await req.json();
        const data = body?.formData;

        const user = await Users.findByIdAndUpdate(id, {
            ...data
        });

        return NextResponse.json({ message: "Users Updated" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};