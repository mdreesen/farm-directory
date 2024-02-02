import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { Metadata } from 'next';

// Importing Components
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import CategoryPage from '@/app/ui/category/CategoryPage';

export const metadata: Metadata = {
  title: 'Chicken Eggs Farm To Table',
}

export default async function Page() {

  return (
    <>
      <div className={styles['container']}>
        <Suspense fallback={<CardsSkeleton />}>
          <CategoryPage categoryName={'Chicken Eggs'} />
        </Suspense>
      </div>
    </>
  );
};

