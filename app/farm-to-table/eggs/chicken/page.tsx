import styles from '@/app/styles/Farmer.module.css';
import { Metadata } from 'next';

// Importing Components
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperLocation from '@/app/WrapperSearch';
import Search from '@/app/ui/search/SearchFilter'

export const metadata: Metadata = {
  title: 'Chicken Eggs Farm To Table',
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
          <Search/>
            <CategoryPage categoryName={'Chicken Eggs'} query={query} />
        </WrapperLocation>
      </div>
    </>
  );
};

