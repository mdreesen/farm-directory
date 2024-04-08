import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { FarmerProducts } from '@/app/ui/farmer/FarmerProducts';
import FarmerDetails from '@/app/ui/farmerProfile/FarmerDetails'
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
                <FarmerDetails data={farmerUserData} />
            </Suspense>
        </div>
    )
};