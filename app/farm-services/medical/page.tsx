
import { Suspense } from 'react';
import styles from '@/app/styles/farmer/Farmer.module.css';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperLocation from '@/app/wrappers/WrapperSearch';

export const metadata: Metadata = {
  title: 'Vet | Medicine Farm Services',
  description: 'Vet & medicine, farm services Farm Directory',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query;

  return (
    <>
      <div className={styles['container']}>
        <WrapperLocation>
          <Suspense fallback={<CardsSkeleton />}>
            <CategoryPage categoryName={'Medical'} query={query} />
          </Suspense>
        </WrapperLocation>
      </div>
    </>
  );
}

