import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { AllFarmers } from 'components/Farmers/AllFarmers';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { Hero } from 'components/Hero';
import { IFarmer } from 'types/mongo.types';
import { NoFarmer } from 'components/NoFarmer';

export default function FarmServicesPage({ farmers }: { farmers: IFarmer[] }) {

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
        <Hero image source={'background-image'} imageTitle='Farm Services' />
        <div className={styles['container']}>
          {filter?.length === 0 ? <NoFarmer/> : <AllFarmers farmers={filter} />}
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
