
import { Suspense } from 'react';
import styles from '@/app/styles/farmer/Farmer.module.css';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperSearch from '@/app/wrappers/WrapperSearch';

export const metadata: Metadata = {
  title: 'Mobile Butchering Farm Services',
  description: 'Mobile butchers, farm services Farm Directory',
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
            <CategoryPage categoryName={'Mobile Butchering'} query={query} />
          </Suspense>
        </WrapperSearch>
      </div>
    </>
  );
}

