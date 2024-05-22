import React from 'react';
import Link from 'next/link';

import styles from '@/app/styles/FarmerDetails.module.css';
import { fetchSingleFarmer } from '@/app/lib/farmerSearch/data';
import { FarmerProfileProducts } from '@/app/ui/farmerProfile/FarmerProfileProducts';

export default async function FarmerProductDetails(data: any) {
    const farmer = await fetchSingleFarmer(data?.data?.id);

    const farmerData = JSON.parse(JSON.stringify(farmer));

    return (
        <div>
            <div className="rounded-lg">
                <div className="container mx-auto py-16">
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-[#F8F8FF] shadow rounded-lg p-6">
                            <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                            <FarmerProfileProducts data={farmerData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};