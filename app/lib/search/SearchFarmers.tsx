import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import Contact from '@/app/(models)/Contact';
import { unstable_noStore as noStore } from 'next/cache';

export async function searchFarmers(query: any) {
    noStore();

    const allFarmers = await Farmer.find();

    try {
        const farmers = await Farmer.find(
            {
                $text: {
                    $search: query,
                    $caseSensitive: false,
                    $diacriticSensitive: false
                },
            }
        )
        return farmers.length > 0 ? farmers : allFarmers
    } catch (error) {
        console.log(error)
        return error
    }
};