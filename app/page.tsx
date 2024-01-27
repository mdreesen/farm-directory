import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard'
import parentLinks from '@/utils/links/parentLinks.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {

  const cardMapping = parentLinks?.map((item: object, index: number) => <CategoryCard itemData={item} key={`${item}-${index}`} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
