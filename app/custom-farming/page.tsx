
import { Suspense } from 'react';
import styles from '@/app/styles/farmer/Farmer.module.css';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperLocation from '@/app/wrappers/WrapperSearch';

export const metadata: Metadata = {
  title: 'Custom Farming Farm Services',
  description: 'Custom farming, farm services Farm Directory',
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
            <CategoryPage categoryName={'Custom Farming'} query={query} />
          </Suspense>
        </WrapperLocation>
      </div>
    </>
  );
}

