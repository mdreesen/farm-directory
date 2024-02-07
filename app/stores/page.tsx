import React from 'react';
import { CategoryCard } from '@/app/ui/category/CategoryCard';
import parentLinks from '@/utils/links/storesLinks.json/parentLinks.json';
import styles from '@/app/styles/Home.module.css';
import PageWrapper from '../WrapperNavCard';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Feed & Bedding',
}


export default function Page() {


  const cardMapping = parentLinks?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
