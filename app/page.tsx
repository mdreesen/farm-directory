import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard'
import parentLinks from '@/utils/links/parentLinks.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next';
import Head from 'next/head';


export const metadata: Metadata = {
  title: {
    template: '%s | Farm Directory',
    default: 'Home | The Farm Directory',
  },
  description: 'Connecting farms to communities',
  metadataBase: new URL('https://thefarmdirectory.com'),
  generator: 'Next.js',
  applicationName: 'The Farm Directory',
  referrer: 'origin-when-cross-origin',
  keywords: ['Farm', 'Directory', 'The Farm Directory', 'Farmers'],
  authors: [{ name: 'Michael' }],
  creator: 'White Raven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function HomePage() {

  const cardMapping = parentLinks?.map((item: object, index: number) => <CategoryCard itemData={item} key={`${item}-${index}`} />);

  return (
    <>
      <main className={styles.main}>
        <Head>
          <title>Home | The Farm Directory</title>
          <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
          <meta name="google" content="notranslate" key="notranslate" />
          <meta name="google-site-verification" content="hEmogV9ZodUsj8jMDwJg4yjV_0a55BqvcqulRHxVpZY" />
        </Head>
        {cardMapping}
      </main>
    </>
  );
}
