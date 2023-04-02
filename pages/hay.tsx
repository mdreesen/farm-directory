import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AllFarmers } from 'components/Farmers/AllFarmers';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { Hero } from 'components/Hero';
import { IFarmer } from 'types/mongo.types';

export default function Farmers({ farmers }: { farmers: any[] }) {
  const [filter, setFilter] = useState<IFarmer[]>();

  useEffect(() => {
    const data = [...farmers]

    setFilter(data.filter(farmerUser => farmerUser.type === "Hay"));
  }, [])

  return (
    <>
      <Head>
        <title>Farmers | Farm Directory</title>
        <meta name='description' content='Farm Directory Farmer Search' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero image source={'background-image'} imageTitle='Hay' />
        <div className={styles['container']}>
        {filter ? <AllFarmers farmers={filter} /> : <div>Apologies, No Farmer For This Category</div>}
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
