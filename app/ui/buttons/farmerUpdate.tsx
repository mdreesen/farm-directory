import React from 'react';
import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function FarmerUpdate(data: any) {
    const auth = await loggedInUserData();

    const showUpdateButton = data?.data?.email === auth?.email && auth?.isFarmer;

    return showUpdateButton && <div className={styles['update']}><a href={`/profile-farmer/${data?.data?._id}/update`} className={styles['update-link']}>Update Information</a></div>
};