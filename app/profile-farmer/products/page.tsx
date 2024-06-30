import React from 'react';
import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import FarmerProductDetails from '@/app/ui/profileFarmer/FarmerProductDetails'
import LoadingCircle from '@/app/ui/loading/loadingCircle';
import { Suspense } from 'react';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<LoadingCircle />}>
                <FarmerProductDetails data={farmerUserData} />
            </Suspense>
        </div>
    )
};