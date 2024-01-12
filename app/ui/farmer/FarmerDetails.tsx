import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { fetchSingleFarmer } from '@/app/composables/data';

export default async function FarmerDetails(data: any) {

    const farmer = await fetchSingleFarmer(data?.data?.id);
    const farmerData = farmer?.farmer;
    console.log(farmerData);

    const farmerBasicInfo = (
        <div className="flex flex-col items-center">
            {/* <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" /> */}
            <h1 className="text-xl font-bold">{farmerData?.farm_name}</h1>
            <p className="text-gray-700">{farmerData?.first_name} {farmerData?.last_name}</p>
            <div className="mt-6 flex flex-col gap-4 justify-center">
                <a href={farmerData?.email} className="bg-blue-500 text-center hover:bg-blue-600 text-white py-2 px-4 rounded">Email</a>
                <a href={farmerData?.phone} className="bg-blue-500 text-center hover:bg-blue-600 text-white py-2 px-4 rounded">Call</a>
                <a href={farmerData?.website} className="bg-blue-500 text-center hover:bg-blue-600 text-white py-2 px-4 rounded">Website</a>
            </div>
        </div>
    );

    const farmerAddress = (
        <div className="flex flex-col">
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Address</span>
            <ul>
                <li className="mb-2">{farmerData?.address_road}</li>
                <li className="mb-2">{farmerData?.address_city}, {farmerData?.address_state}</li>
                <li className="mb-2">{farmerData?.address_zip}</li>
            </ul>
        </div>
    );

    const productOne = (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold">{farmerData?.product_one_title}</span>
                <p>
                    <span className="text-gray-700 mr-2">{farmerData?.product_one_feed}</span>
                    {farmerData?.product_one_available ? <span className="text-gray-700">Available</span> : <span className="text-gray-700">Unavailable</span>}
                </p>
            </div>
            <p className="mt-2">{farmerData?.product_one_description}</p>
        </div>
    );

    const productTwo = (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold">{farmerData?.product_two_title}</span>
                <p>
                    <span className="text-gray-700 mr-2">{farmerData?.product_two_feed}</span>
                    {farmerData?.product_two_available ? <span className="text-gray-700">Available</span> : <span className="text-gray-700">Unavailable</span>}
                </p>
            </div>
            <p className="mt-2">{farmerData?.product_two_description}</p>
        </div>
    );

    const productThree = (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold">{farmerData?.product_three_title}</span>
                <p>
                    <span className="text-gray-700 mr-2">{farmerData?.product_three_feed}</span>
                    {farmerData?.product_three_available ? <span className="text-gray-700">Available</span> : <span className="text-gray-700">Unavailable</span>}
                </p>
            </div>
            <p className="mt-2">{farmerData?.product_three_description}</p>
        </div>
    );

    const socialLinks = (
        <div className="flex justify-center items-center gap-6 my-6">
            <a className="text-gray-700 hover:text-yellow-500" aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                </svg>
            </a>
            <a className="text-gray-700 hover:text-yellow-500" aria-label="Visit TrendyMinds Instagram" href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                    </path>
                </svg>
            </a>
            <a className="text-gray-700 hover:text-yellow-500" aria-label="Visit TrendyMinds Twitter" href="" target="_blank">
                <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                </svg>
            </a>
        </div>
    );

    return (
        <div className={styles['container']}>
            <div className="rounded-lg">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">

                                {/* <div className="flex flex-col items-center">
                                    <h1 className="text-xl font-bold">John Doe</h1>
                                    <p className="text-gray-700">Software Developer</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                        <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                    </div>
                                </div> */}
                                {farmerBasicInfo}

                                <hr className="my-6 border-t border-gray-300" />
                                {farmerAddress}
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                                {productOne}
                                {productTwo}
                                {productThree}

                                <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                                {socialLinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};