import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import LoadingCircle from '@/app/ui/loading/loadingCircle';
import { Suspense } from 'react';

export default async function Page() {

    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<LoadingCircle />}>
                <div>Hello</div>
            </Suspense>
        </div>
    )
};