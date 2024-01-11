import { Suspense } from 'react';
import Head from 'next/head';
import styles from '@/app/styles/Farmer.module.css';
import {fetchFarmers } from '@/app/composables/data';
import { filterFarmerProducts } from '@/app/composables/farmerData/filterFarmerFarmToTable';
import FarmerCard from "@/app/ui/FarmerCard";
import { NoFarmer } from '@/app/ui/NoFarmer';


export default async function Page() {
  const farmers = await fetchFarmers();
  const farmerCategory = await filterFarmerProducts(farmers?.farmers, 'Vegetables');
  const categoryFarmers = farmerCategory?.map((item: Object) => <FarmerCard farmerData={item} />);

  if (farmerCategory.length === 0) return <NoFarmer />

  return (
    <>
      <Head>
        <title>Farm To Table | Farm Directory</title>
        <meta name='description' content='Farm Directory Farmer Search' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className={styles['container']}>
          <Suspense fallback={<h3>Loading...</h3>}>
            {categoryFarmers}
          </Suspense>
        </div>
      </main>
    </>
  );
}

