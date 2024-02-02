
import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import CategoryPage from '@/app/ui/category/CategoryPage';

export const metadata: Metadata = {
  title: 'Other Farm To Table',
}


export default async function Page() {

  return (
    <>
      <div className={styles['container']}>
        <Suspense fallback={<CardsSkeleton />}>
          <CategoryPage categoryName={'Other Farm To Table'} />
        </Suspense>
      </div>
    </>
  );
}

