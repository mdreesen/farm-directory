import Farmer from '@/app/(models)/Farmer';
import { unstable_noStore as noStore } from 'next/cache';

// This does a very good job in Search Indexes for Mongo
// https://www.youtube.com/watch?v=o2ss2LJNZVE&t=22s&ab_channel=MongoDB

export async function searchFarmersLoggedIn(query: any, user: any) {
    noStore();

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "farmerSearch",
                    "text": {
                        "query": query,
                        "path": ["address_zip", "address_city", "address_state"]
                    }
                }
            }
        ]);

        return farmers.filter(item => item.address_zip.includes(user.postalCode));
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function searchFarmers(query: any) {
    noStore();

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "farmerSearch",
                    "text": {
                        "query": query,
                        "path": ["address_state", "address_city", "address_zip", "farm_name", "first_name", "last_name", "products.product_title"]
                    },
                }
            }
        ]);

        return farmers;
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function searchProducts(query: string) {
    noStore();

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "farmerSearch",
                    "text": {
                        "query": query,
                        "path": "products.product_title"
                    },
                }
            }
        ]);

        const filter = farmers?.map(farmer => farmer?.products.filter((item: any) => item?.product_title === query ? farmers : {}));
        return filter.flat(Infinity) ?? [];
    } catch (error) {
        console.log(error)
        return error
    }
};