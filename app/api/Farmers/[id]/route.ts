import Farmer from '@/app/(models)/Farmer';
import { NextResponse } from 'next/server';

// Get Single Farmer By ID
export async function GET(req: any, { params }: any) {
    try {
        const {id} = params;
        const farmer = await Farmer.findOne({_id: id});
        return NextResponse.json({ farmer }, { status: 200 });

    } catch(error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};

// Get Single Farmer By ID
export async function PUT(req: any, { params }: any) {
    try {
        const {id} = params;
        const farmer = await Farmer.findOne({_id: id});
        return NextResponse.json({ farmer }, { status: 200 });

    } catch(error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};