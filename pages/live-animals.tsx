import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AllFarmers } from 'components/Farmers/AllFarmers';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { Hero } from 'components/Hero';
import { IFarmer } from 'types/mongo.types';

export default function LiveAnimalsPage({ farmers }: { farmers: IFarmer[] }) {
  const [filter, setFilter] = useState<IFarmer[]>()

  useEffect(() => {
    const data = [...farmers]

    setFilter(data.filter(farmerUser => farmerUser.type === "Live Animals For Sale"));
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
        <Hero image source={'background-image'} imageTitle='Live Animals' />
        <div className={styles['container']}>
          {filter?.length === 0 ? <div className={styles['no-data']}>Apologies, No Farmer For This Category</div> : <AllFarmers farmers={filter} />}
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
