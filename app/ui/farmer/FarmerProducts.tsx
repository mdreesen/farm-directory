import React from 'react';
// import styles from '@/app/styles/NoFarmer.module.css';

export function FarmerProducts(data: any) {

    const productData = data?.data;

    const productInformation = productData?.product_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{productData?.product_title}</span>
                </div>
                {productData?.product_available !== '' && <span className="text-gray-700">{productData?.product_available}</span>}
            </div>
            <p className="mt-2">{productData?.product_description}</p>
        </div>
    );

    return productInformation;
};