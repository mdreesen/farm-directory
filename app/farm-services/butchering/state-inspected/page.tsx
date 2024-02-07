
import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperSearch from '@/app/WrapperSearch';

export const metadata: Metadata = {
  title: 'State Inspected Butchering Farm Services',
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
        <WrapperSearch>
          <Suspense fallback={<CardsSkeleton />}>
            <CategoryPage categoryName={'State Inspected Butchering'} query={query} />
          </Suspense>
        </WrapperSearch>
      </div>
    </>
  );
}

