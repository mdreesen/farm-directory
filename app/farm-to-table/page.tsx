import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard';
import parentLinks from '@/utils/links/farmToTableLinks/parentLinks.json';
import styles from '@/app/styles/Home.module.css';
import PageWrapper from '../WrapperNavCard';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farm To Table',
}


export default function FarmToTable() {


  const cardMapping = parentLinks?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
