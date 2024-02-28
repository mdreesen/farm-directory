import React from 'react';
import { CategoryCard } from '@/app/ui/category/CategoryCard';
import meatLinks from '@/utils/links/farmToTableLinks/meat/meatLinks.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meat Farm To Table',
  description: 'Meat, farm to table Farm Directory',
}


export default function Page() {

  const cardMapping = meatLinks?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
