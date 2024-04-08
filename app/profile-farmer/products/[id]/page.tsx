import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import LoadingCircle from '@/app/ui/loading/loadingCircle';
import { Suspense } from 'react';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';
import { UpdateFarmerProductsForm } from '@/app/ui/forms/UpdateFarmerProductsForm';

export default async function Page() {
    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');
    const parse = await JSON.parse(JSON.stringify(farmerUserData));

    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<LoadingCircle />}>
                <UpdateFarmerProductsForm data={parse}/>
            </Suspense>
        </div>
    )
};