import React from 'react';
import Head from 'next/head';
import { AllFarmers } from 'components/Farmers/AllFarmers';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { Hero } from 'components/Hero';
import { IFarmer } from 'types/mongo.types';

export default function FarmServicesPage({ farmers }: { farmers: IFarmer[] }) {
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
          <AllFarmers farmers={farmers} />
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
