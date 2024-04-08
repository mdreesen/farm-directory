import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { FarmerProducts } from '@/app/ui/farmer/FarmerProducts';
import { Suspense } from 'react';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

    // Need to parse Data from server and pass to client
    const parse = await JSON.parse(JSON.stringify(farmerUserData));

    const products = parse?.products?.map((item: any, index: number) => <FarmerProducts key={`${item?.product_title}-${index}`} data={item} />)

    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<div>...loading</div>}>
                <div className={styles['container']}>
                    <div className="rounded-lg">
                        <div className="container mx-auto py-16">
                            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 relative z-20">
                                <div className="col-span-4 sm:col-span-9">
                                    <div className="bg-white shadow rounded-lg p-6">
                                        <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                                        {products}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    )
};