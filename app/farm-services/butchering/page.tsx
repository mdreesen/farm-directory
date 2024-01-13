import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard';
import parentLinks from '@/utils/links/farmEquipmentLinks/butcheringLinks.json';
import styles from '@/app/styles/Home.module.css';


export default function FarmToTable() {


  const cardMapping = parentLinks?.map((item, index) => <CategoryCard itemData={item} key={`${item}-${index}`} />);

  return (
    <>
      <main className={styles.main}>
        {cardMapping}
      </main>
    </>
  );
}
