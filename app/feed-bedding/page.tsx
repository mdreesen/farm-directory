import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard';
import parentLinks from '@/utils/links/feedBeddingLinks/parentLinks.json';
import styles from '@/app/styles/Home.module.css';
import PageWrapper from '../WrapperNavCard';


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