import styles from '@/app/styles/farmer/Farmer.module.css';
import { Metadata } from 'next';

// Importing Components
import CategoryPage from '@/app/ui/category/CategoryPage';
import WrapperLocation from '@/app/wrappers/WrapperSearch';

export const metadata: Metadata = {
  title: 'Chicken Eggs Farm To Table',
  description: 'Chicken eggs, farm to table Farm Directory',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || 'Chicken Eggs';


  return (
    <>
      <div className={styles['container']}>
        <WrapperLocation>
          <CategoryPage categoryName={query} />
        </WrapperLocation>
      </div>
    </>
  );
};

