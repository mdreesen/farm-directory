import React from 'react';
import Head from 'next/head';
import { CategoryCard } from '@/app/ui/CategoryCard';
import parentLinks from '@/utils/links/liveAnimalLinks/parentLinks.json';
import styles from '@/app/styles/Home.module.css';


export default function FarmToTable() {


  const cardMapping = parentLinks?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <Head>
        <title>Home | Farm Directory</title>
        <meta name='description' content='Farm Directory Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
