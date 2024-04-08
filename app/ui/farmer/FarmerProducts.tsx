import React from 'react';
import styles from '@/app/styles/NoFarmer.module.css';

export function FarmerProducts(data: any) {
    console.log(data);
    const productData = data?.data;

    const productInformation = productData?.product_show === 'true' && (
        <div className="mb-6">
            <span className="text-gray-700 m-4">{productData?.product_show !== 'false' ? 'Showing Product To Public' : 'Hiding Product From Public'}</span>

            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{productData?.product_title}</span>
                </div>
                {productData?.product_available !== '' && <span className="text-gray-700">{productData?.product_available}</span>}
            </div>
            <p className="mt-2">{productData?.product_description}</p>

        </div>
    );

    return (
        <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                {productInformation}
            </div>
        </div>
    )
};