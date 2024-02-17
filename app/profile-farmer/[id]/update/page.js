import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { UpdateFarmerForm } from '@/app/ui/forms/UpdateFarmerForm';
import { Suspense } from 'react';
import { getServerSession } from 'next-auth';


import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';

export default async function Page() {
    const session = await getServerSession()
    const farmerUserData = await fetchSingleFarmerByEmail(session?.user?.email ?? '');

    // Need to parse Data from server and pass to client
    const parse = await JSON.parse(JSON.stringify(farmerUserData));


    return (
        <div className={styles['container']}>
            <Suspense fallback={<div>...loading</div>}>
                <UpdateFarmerForm data={parse} />
            </Suspense>
        </div>
    )
};