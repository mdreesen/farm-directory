import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { UpdateFarmerForm } from '@/app/ui/forms/UpdateFarmerForm';

import { fetchSingleFarmerByEmail } from '@/app/lib/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

    // Need to parse Data from server and pass to client
    const parse = JSON.parse(JSON.stringify(farmerUserData));


    return (
        <div className={styles['container']}>
            <UpdateFarmerForm data={parse} />
        </div>
    )
};