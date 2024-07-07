import React from 'react';
import { CategoryCard } from '@/app/ui/category/CategoryCard';
import parentLinks from '@/utils/links/farmToTableLinks/vineyardsOrchardsLinks.json';
import styles from '@/app/styles/Home.module.css';
import PageWrapper from '@/app/wrappers/WrapperNavCard';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vineyards & Orchards Farm To Table',
  description: 'Vineyards & Orchards, farm to table Farm Directory',
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
