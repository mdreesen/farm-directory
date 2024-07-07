import React from 'react';
import { CategoryCard } from '@/app/ui/category/CategoryCard';
import parentLinks from '@/utils/links/feedBeddingLinks/strawLinks/straw.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Straw Feed & Bedding',
  description: 'Straw, feed and bedding Farm Directory',
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
