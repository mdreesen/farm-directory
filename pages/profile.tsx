import React from 'react';
import Head from 'next/head';
import { ax } from 'lib/axios.lib';
import { LogError } from 'utils/util';
import styles from 'styles/Farmer.module.css';
import { ProfileFarmer } from 'components/ProfileFarmer';
import { ProfileUser } from 'components/ProfileUser';
import useFarmerUser from '../utils/composable/useFarmerUser';
import { IFarmer } from 'types/mongo.types';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function FarmersPage({ farmers }: { farmers: IFarmer[], props: any }) {

  const farmyWarmy = useFarmerUser(farmers);
  const { user } = useUser();

  // console.log('farmers',farmers)
  // console.log('farmer whole',farmyWarmy);
  // console.log('user',user)


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
          {farmyWarmy.length && <ProfileFarmer data={farmyWarmy} />}
          {user && <ProfileUser />}
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
