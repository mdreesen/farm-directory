import React from 'react';
import Link from 'next/link';

export function FarmerProfileProducts(data: any) {

    const eachProduct = data?.data?.products;

    const products = eachProduct?.map((item: any, index: number) => (
        <div key={`${item.product_title}-${index}`} className="mb-12 mt-12">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{item?.product_title}</span>
                </div>
                {item?.product_available !== '' && <span className="text-gray-700">{item?.product_available}</span>}
            </div>
            <p className="mt-2">{item?.product_description}</p>

            <div className='flex justify-center'>
                <Link href={`/profile-farmer/products/${item?._id}`}>Update Product</Link>
            </div>
        </div>
    ))

    return (
        <div>{products}</div>
    );
};