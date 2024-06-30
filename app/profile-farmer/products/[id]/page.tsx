import React from 'react';
import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import LoadingCircle from '@/app/ui/loading/loadingCircle';
import { Suspense } from 'react';

import { fetchSingleFarmerByEmail } from '@/app/lib/dataFarmer/data';
import { loggedInUserData } from '@/app/lib/cookieData';
import { UpdateFarmerProductsForm } from '@/app/ui/forms/UpdateFarmerProductsForm';

export default async function Page(searchParams: any) {

    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');
    const parse = await JSON.parse(JSON.stringify(farmerUserData));

    const productIdParam = searchParams?.params?.id;

    const filterProduct = parse?.products?.filter((item: any) => item?._id === productIdParam);


    const eachProduct = filterProduct?.map((item: any) => {
        const makeData = {...item, farmerId: parse?._id}

        return <UpdateFarmerProductsForm key={item?._id} data={makeData} farmerId={parse?._id} />
})

    return (
        <div className={styles['container-update']}>
            <Suspense fallback={<LoadingCircle />}>
                {eachProduct}
            </Suspense>
        </div>
    )
};