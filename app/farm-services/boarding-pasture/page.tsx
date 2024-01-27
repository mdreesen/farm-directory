import React from 'react';
import { CategoryCard } from '@/app/ui/CategoryCard';
import parentLinks from '@/utils/links/farmEquipmentLinks/boardingLinks.json';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boarding | Pasture Farm Services',
}


export default function FarmToTable() {


  const cardMapping = parentLinks?.map((item, index) => <CategoryCard itemData={item} key={`${item}-${index}`} />);

  return (
    <>
      <div className={styles.main}>
        {cardMapping}
      </div>
    </>
  );
}
