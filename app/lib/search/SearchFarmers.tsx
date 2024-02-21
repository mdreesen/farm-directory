import Farmer from '@/app/(models)/Farmer';
import { unstable_noStore as noStore } from 'next/cache';

// This does a very good job in Search Indexes for Mongo
// https://www.youtube.com/watch?v=o2ss2LJNZVE&t=22s&ab_channel=MongoDB

export async function searchFarmers(query: any) {
    noStore();
    const allFarmers = await Farmer.find();

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "prioritySearchOne",
                    "text": {
                        "query": query,
                        "path": ["address_state", "address_city", "address_zip", "farm_name", "first_name", "last_name"]
                    },
                }
            }
        ]);
        return farmers.length > 0 ? farmers : allFarmers
    } catch (error) {
        console.log(error)
        return error
    }
};