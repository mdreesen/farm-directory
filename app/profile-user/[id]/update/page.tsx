import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import { UpdateUserForm } from '@/app/ui/forms/UpdateUserForm';
import { Suspense } from 'react';

import { fetchSingleUserByEmail } from '@/app/lib/dataUser/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
    const auth = await loggedInUserData();
    const userData = await fetchSingleUserByEmail(auth?.email ?? '');
    
    // Need to parse Data from server and pass to client
    const parse = await JSON.parse(JSON.stringify(userData));

    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<div>...loading</div>}>
                <UpdateUserForm data={parse} />
            </Suspense>
        </div>
    )
};