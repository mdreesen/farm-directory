import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import Contact from '@/app/(models)/Contact';
import { unstable_noStore as noStore } from 'next/cache';

export async function findProduct(id: string) {
    noStore();

    try {
        const farmers = await Farmer.find({
            products: {_id: id}
        })
        return farmers
    } catch (error) {
        console.log(error)
        return error
    }
};