import React from 'react';
import { CategoryCard } from '@/app/ui/category/CategoryCard';
import parentLinks from '@/utils/links/farmToTableLinks/eggLinks.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eggs Farm To Table',
  description: 'Eggs, farm to table Farm Directory',
}

export default function Page() {

  const cardMapping = parentLinks?.map((item, index) => <CategoryCard itemData={item} key={`${item}-${index}`} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
