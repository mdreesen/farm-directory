import React from 'react';
import Link from 'next/link';

import styles from '@/app/styles/UserDetails.module.css';

export default async function InfoDetails(data: any) {
    const userData = data?.data;

    const favoriteFarmers = userData.favoriteFarmers.map((item: any) => (
        <Link key={`${item._id}`} href={`/farmer/details/${item._id}`}>{item.farm_name ? item.farm_name : `${item.first_name} ${item.last_name}`}</Link>
    ))

    return (
        <div className={styles['container']}>
            <div className="rounded-lg">
                <div className="container mx-auto py-16">
                    <div className="">
                        <div className="col-span-4 sm:col-span-9">
                            <div className={`bg-[#F8F8FF] shadow rounded-lg p-6 ${styles['container-info']}`}>
                                <div className={styles['container-info']}>
                                    <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Your Information</h2>
                                    <span>{userData.first_name && `First Name: ${userData.first_name}`}</span>
                                    <span>{userData.last_name && `Last Name: ${userData.last_name}`}</span>

                                    <span>{userData.formattedAddress && `Address: ${userData.houseNumber} ${userData.street}, ${userData.city}, ${userData.state} ${userData.postalCode}`}</span>
                                    <span>{userData.email && `Email: ${userData.email}`}</span>
                                    <span>{userData.phone && `Phone: ${userData.phone}`}</span>
                                </div>

                                <div className='flex flex-col text-center'>
                                    <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Favorite Farmers</h2>
                                    <span>{userData.favoriteFarmers.length}</span>
                                    {favoriteFarmers}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};