import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import Contact from '@/app/(models)/Contact';
import { unstable_noStore as noStore } from 'next/cache';
import { Location } from '@/app/lib/locationServices/Location';

export async function searchNearbyFarmers() {
    noStore();

    console.log(Location())
    // try {
    //     const farmers = await Farmer.find(
    //         {
    //             $text: {
    //                 $search: query,
    //                 $caseSensitive: false,
    //                 $diacriticSensitive: false
    //             },
    //         }
    //     )
    //     return farmers
    // } catch (error) {
    //     console.log(error)
    //     return error
    // }
};