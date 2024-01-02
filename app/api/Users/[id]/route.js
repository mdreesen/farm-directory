import Users from '@/app/(models)/User';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    try {
        const { id } = params;
        const user = await Users.findOne({ _id: id });
        debugger;
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}