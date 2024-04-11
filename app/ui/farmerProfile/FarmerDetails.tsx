import React from 'react';
import Link from 'next/link';

import styles from '@/app/styles/FarmerDetails.module.css';
import { fetchSingleFarmer } from '@/app/lib/farmerSearch/data';
import { FarmerProducts } from '@/app/ui/farmer/FarmerProducts';

export default async function FarmerDetails(data: any) {
    const farmer = await fetchSingleFarmer(data?.data?.id);

    const farmerData = JSON.parse(JSON.stringify(farmer));

    const productOne = farmerData?.product_one_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{farmerData?.product_one_title}</span>
                </div>
                {farmerData?.product_one_title !== '' && farmerData?.product_one_available !== '' && <span className="text-gray-700">{farmerData?.product_one_available}</span>}
            </div>
            <p className="mt-2">{farmerData?.product_one_description}</p>

            <div className='flex justify-center'>
                {/* <Link href={`/profile-farmer/products/${item?._id}`}>Update Product</Link> */}
            </div>
        </div>
    );

    const productTwo = farmerData?.product_two_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{farmerData?.product_two_title}</span>
                </div>
                {farmerData?.product_two_title !== '' && farmerData?.product_two_available !== '' && <span className="text-gray-700">{farmerData?.product_two_available}</span>}
            </div>
            <p className="mt-2">{farmerData?.product_two_description}</p>
        </div>
    );

    const productThree = farmerData?.product_three_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{farmerData?.product_three_title}</span>
                </div>
                {farmerData?.product_three_title !== '' && farmerData?.product_three_available !== '' && <span className="text-gray-700">{farmerData?.product_three_available}</span>}
            </div>
            <p className="mt-2">{farmerData?.product_three_description}</p>
        </div>
    );

    return (
        <div className={styles['container']}>
            <div className="rounded-lg">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 relative z-20">
                        <div className="col-span-4 sm:col-span-3">
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                                {productOne}
                                {productTwo}
                                {productThree}
                                <FarmerProducts data={farmerData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};