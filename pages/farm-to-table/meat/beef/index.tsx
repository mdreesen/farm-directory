import React from 'react';
import Head from 'next/head';
import { CategoryCard } from '../../../../components/CategoryCard';
import links from '../../../../utils/links/farmToTableLinks/meat/finishedBeef.json';
import styles from '/styles/Home.module.css';


export default function FarmToTable() {


  const cardMapping = links?.map((item) => <CategoryCard itemData={item} key={item} />);

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
