import React from 'react';
import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import { MakeFarmerProductsForm } from '@/app/ui/forms/MakeFarmerProductsForm';
import { Suspense } from 'react';

import { fetchSingleFarmerByEmail } from '@/app/lib/dataFarmer/data';
import { loggedInUserData } from '@/app/lib/cookieData';

import LoadingCircle from '@/app/ui/loading/loadingCircle';

export default async function Page() {
    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

    // Need to parse Data from server and pass to client
    const parse = await JSON.parse(JSON.stringify(farmerUserData));


    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<LoadingCircle/>}>
                <MakeFarmerProductsForm data={parse} />
            </Suspense>
        </div>
    )
};