import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperLocation from '@/app/WrapperSearch';

export const metadata: Metadata = {
  title: 'Farmers Markets | Stores',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || 'all';

  return (
    <>
      <div className={styles['container']}>
        <WrapperLocation>
          <Suspense fallback={<CardsSkeleton />}>
            <CategoryPage categoryName={'Farmers Markets'} query={query} />
          </Suspense>
        </WrapperLocation>
      </div>
    </>
  );
}

