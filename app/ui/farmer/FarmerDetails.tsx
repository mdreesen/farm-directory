import React from 'react';
import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import { fetchSingleFarmer } from '@/app/lib/dataFarmer/data';
import { FarmerProducts } from './FarmerProducts';
import FarmerMap from '@/app/ui/maps/FarmerMap';

import ShareFacebook from '@/app/ui/buttons/socials/ShareFacebook';
import ShareTwitter from '../buttons/socials/ShareTwitter';
import ShareEmail from '../buttons/socials/ShareEmail';
import SharePinterest from '../buttons/socials/SharePinterest';

export default async function FarmerDetails(data: any) {
    const farmer = await fetchSingleFarmer(data?.data?.id);
    const parse = await JSON.parse(JSON.stringify(farmer));

    const farmerData = farmer;

    const farmerLocation = {
        longitude: farmer.longitude,
        latitude: farmer.latitude
    }

    const showAllSocialMedia = farmerData.facebook && farmerData?.facebook !== "";
    const showInstagram = farmerData.facebook && farmerData?.facebook !== "";
    const showFacebook = farmerData.instagram && farmerData?.instagram !== "";

    const socialShare = (
        <div>
            <h3>Share this farmer</h3>
            <div className='flex justify-around'>
                <ShareFacebook data={parse._id} />
                <SharePinterest data={parse._id} />
                <ShareTwitter data={parse._id} />
                <ShareEmail data={parse._id} />
            </div>
        </div>
    )

    // Going forward with products, this will be the only line we need
    const farmerProducts = farmerData?.products?.map((item: any, index: number) => item?.product_show === 'true' && <FarmerProducts key={`${item?.product_title}-${index}`} data={item} />);

    const farmerBasicInfo = (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-xl font-bold">{farmerData?.farm_name}</h1>
            <p className="text-gray-700">{farmerData?.first_name} {farmerData?.last_name}</p>
            <div className="mt-6 flex flex-col gap-4 justify-center">
                {farmerData?.email !== "" && <a href={`mailto:${farmerData?.email}`} className="bg-[#7A3A30] text-center text-white py-2 px-4 rounded">Email</a>}
                {farmerData?.phone !== "" && <a href={`tel:${farmerData?.phone}`} className="bg-[#7A3A30] text-center text-white py-2 px-4 rounded">Call</a>}
                {farmerData?.website !== "" && <a href={`${farmerData?.website}`} target="_blank" className="bg-[#7A3A30] text-center text-white py-2 px-4 rounded">Website</a>}
            </div>`
            {socialShare}
        </div>
    );

    const farmerAddress = (
        <div className="flex flex-col text-center">
            <hr className="my-6 border-t border-gray-300" />
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Address</span>
            <ul>
                <a href={`https://maps.google.com/?q=${farmerData?.address_road} ${farmerData?.address_city}, ${farmerData?.address_state} ${farmerData?.address_zip}`} target="_blank">{`${farmerData?.address_road} ${farmerData?.address_city}, ${farmerData?.address_state} ${farmerData?.address_zip}`}</a>
            </ul>
        </div>
    );

    const socialLinks = showAllSocialMedia && (
        <div className="flex flex-col text-center">
            <hr className="my-6 border-t border-gray-300" />
            <h3>Follow on Social Media</h3>
            <div className="flex justify-center items-center gap-6 my-6 text-center">
                {showFacebook && (
                    <a className="text-gray-700 hover:text-[#7A3A30]" aria-label="Visit TrendyMinds Facebook" href={farmerData?.facebook} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                            <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                            </path>
                        </svg>
                    </a>
                )}

                {showInstagram && (
                    <a className="text-gray-700 hover:text-[#7A3A30]" aria-label="Visit TrendyMinds Instagram" href={farmerData?.instagram} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );

    const map = farmerData?.geometry && (
        <div className='flex w-full justify-center p-4'>
            <FarmerMap data={farmerLocation} />
        </div>
    )

    return (
        <div className={styles['container']}>
            <div className="rounded-lg">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 relative z-20">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-[#F8F8FF] shadow rounded-lg p-6">
                                {farmerBasicInfo}
                                {socialLinks}
                                {farmerAddress}
                            </div>
                        </div>

                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-[#F8F8FF] shadow rounded-lg p-6">
                                <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                                {farmerProducts}
                            </div>
                        </div>
                    </div>
                </div>
                {map}
            </div>
        </div>
    )
};