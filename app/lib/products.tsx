import Farmer from '@/app/(models)/Farmer';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSingleFarmer(productData: any) {
    noStore()

    try {
        const updateProducts = await Farmer?.insertMany(productData);

        return updateProducts
    } catch (error) {
        console.log(error)
        return error
    }
};