import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { Hero } from 'components/Hero';
import { AllFarmers } from 'components/Farmers/AllFarmers';
import { NoFarmer } from 'components/NoFarmer';
import { IFarmer } from 'types/mongo.types';

export default function StrawPage({ farmers }: { farmers: IFarmer[] }) {

  const [filter, setFilter] = useState<IFarmer[]>()

  useEffect(() => {
    const data = [...farmers]

    setFilter(data.filter(farmerUser => farmerUser.type === "Straw"));
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
        <Hero image source={'background-image'} imageTitle='Straw' />
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
