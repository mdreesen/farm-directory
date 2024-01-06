import Head from 'next/head';
import styles from '@/app/styles/Farmer.module.css';
import { fetchFarmers } from '@/app/composables/data';
import FarmerCard from "@/app/ui/FarmerCard";
import { Suspense } from 'react';


export default async function BeefPage() {
  const farmers = await fetchFarmers();

  const categoryFarmers = farmers?.farmers?.map((item: Object) => <FarmerCard farmerData={item} />);

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

