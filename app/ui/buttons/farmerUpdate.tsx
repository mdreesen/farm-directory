import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function FarmerUpdate(data: any) {
    const auth = await loggedInUserData();

    return auth?.isFarmer && <div className={styles['update']}><a href={`/profile-farmer/${data?.data}/update`} className={styles['update-link']}>Update Information</a></div>
};