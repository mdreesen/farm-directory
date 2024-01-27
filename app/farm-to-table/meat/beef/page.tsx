import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard';
import links from '@/utils/links/farmToTableLinks/meat/finishedBeef.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beef Farm To Table',
}


export default function FarmToTable() {

  const cardMapping = links?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
