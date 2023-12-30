import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { AllFarmers } from 'components/Farmers/AllFarmers';
import { NoFarmer } from 'components/NoFarmer';
import { IFarmer } from 'types/mongo.types';
import { fetchFarmers } from 'lib/data';

export default function BeefPage() {
  const farmerUser = fetchFarmers() ?? [];
  console.log(farmerUser);

  // const [filter, setFilter] = useState<IFarmer[]>();

  // useEffect(() => {
  //   // const data = [...farmers]

  //   setFilter(data.filter(farmerUser => {
  //     console.log(farmerUser?.product.filter(item => item.product_name?.includes('Beef')));

  //     const products = farmerUser?.product.filter(item => item.product_name?.includes('Beef')) ?? [];
  //     const finishedProduct = products?.map(item => item?.product_feed.filter((feed: any) => feed?.includes('Grain Finished')))

  //     if (finishedProduct) return farmerUser.type === "Farm to Table"
  //   }));
  // }, [])

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
        <AllFarmers farmers={[]} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { documents } = await ax.farmers.find;

    return {
      props: { farmers: documents },
    };
  } catch (error) {
    LogError(error);
    return { props: {} };
  }
}

