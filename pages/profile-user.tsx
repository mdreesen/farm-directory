import React from 'react';
import Head from 'next/head';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { FarmerProfile } from 'components/FarmerProfile';
import useFarmerUser from '../utils/composable/useFarmerUser';
import { IFarmer } from 'types/mongo.types';

export default function FarmersPage({ farmers }: { farmers: IFarmer[], props: any }) {

  const farmyWarmy = useFarmerUser(farmers)

const hayBoisVisual = farmyWarmy.map((item: any) => (
  <FarmerProfile data={item} key={item?.user?.farm_name}/>
))


  return (
    <>
      <Head>
        <title>Farmers | Farm Directory</title>
        <meta name='description' content='Farm Directory Farmer Search' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className={styles['container']}>
          {hayBoisVisual}
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
