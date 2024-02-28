import React from 'react';
import { CategoryCard } from '@/app/ui/category/CategoryCard';
import links from '@/utils/links/farmToTableLinks/meat/finishedBeef.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beef Farm To Table',
  description: 'Beef, farm to table Farm Directory',
}


export default function Page() {

  const cardMapping = links?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
