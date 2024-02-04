import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import Contact from '@/app/(models)/Contact';
import { unstable_noStore as noStore } from 'next/cache';
import { Location } from '@/app/lib/locationServices/Location';

export async function searchNearbyFarmers(data: any) {
    noStore();

    console.log('YUMMY YUMMY ADDRESS TUMMY', data)

};