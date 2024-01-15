import React from 'react';
import styles from '@/app/styles/FarmerCard.module.css';
import Link from 'next/link';

export default async function FarmerCard(farmerData: any) {
    const data = farmerData?.farmerData;

//     console.log(data?.createdAt)
//     const date = new Date( data?.createdAt * 1000).toLocaleString();
// console.log(date)


    const farmLogo = <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex justify-center items-center" style={{ backgroundImage: "url('/images/logos/logoThree.jpg')" }} title="Woman holding a mug"></div>

    const farmerInfo = (
        <div className="text-sm">
            <p className="text-gray-900 leading-none mb-1">{data?.first_name} {data?.last_name}</p>
            <div>
                <span className="text-gray-600">Created</span>
                <p className="text-gray-600">{data?.createdAt}</p>
            </div>
        </div>
    );

    const farmerDetail = (
        <div className="mb-2 flex flex-col justify-center align-middle items-center">
            <div className="text-gray-600 font-bold text-l">Products</div>
            <p className="text-gray-700 text-base flex items-center gap-x-2 flex-col lg:flex-row md:flex-col">
                <span>{data?.product_one_title}</span>
                <span>{data?.product_two_title}</span>
                <span>{data?.product_three_title}</span>
            </p>
        </div>
    )


    return (
        <div className={`${styles['card']} max-w-sm lg:max-w-full lg:flex justify-center`}>
            {farmLogo}
            <div className="border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal lg:w-[32rem]">
                <div className="flex justify-center text-gray-900 font-bold text-xl mb-2">{data?.farm_name}</div>
                {farmerDetail}
                <div className='flex w-full justify-center mb-2'>
                    <Link href={`/farmer/details/${data?._id}`}><button className="rounded-md border p-2 hover:bg-yellow-500 text-gray-700">Details</button></Link>
                </div>
                <div className="flex items-center justify-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/images/logos/logoTwo.webp" alt="Avatar of Jonathan Reinink" />
                    {farmerInfo}
                </div>
            </div>
        </div>
    );
}
