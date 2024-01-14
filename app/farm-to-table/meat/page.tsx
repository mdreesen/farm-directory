import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard';
import meatLinks from '@/utils/links/farmToTableLinks/meat/meatLinks.json';
import styles from '@/app/styles/Home.module.css';


export default function FarmToTable() {

  const cardMapping = meatLinks?.map((item) => <CategoryCard itemData={item} key={item} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
