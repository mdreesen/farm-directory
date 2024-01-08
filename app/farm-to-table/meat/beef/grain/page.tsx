import Head from 'next/head';
import styles from '@/app/styles/Farmer.module.css';
import {fetchFarmers } from '@/app/composables/data';
import { filterGrainBeefFarmer } from '@/app/composables/filterFarmer';
import FarmerCard from "@/app/ui/FarmerCard";
import { Suspense } from 'react';


export default async function Page() {
  const farmers = await fetchFarmers();
  const farmerCategory = await filterGrainBeefFarmer(farmers?.farmers);
  console.log(farmerCategory)

  const categoryFarmers = farmers?.farmers?.reverse()?.map((item: Object) => <FarmerCard farmerData={item} />);

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

