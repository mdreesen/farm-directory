import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { fetchFarmers, searchFarmers } from '@/app/lib/data';
import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import FarmerCard from "@/app/ui/farmer/FarmerCard";
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
import Search from '@/app/ui/Search';

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
  const query = searchParams?.query || '';

  // const totalPages = await searchFarmers(query);


  const farmers = await fetchFarmers();
  const farmerCategory = await filterFarmerProducts(farmers, 'Chicken Eggs');
  // const search = totalPages ? totalPages : farmerCategory

  const categoryFarmers = farmerCategory?.map((item: Object, index: number) => <FarmerCard key={index} farmerData={item} />);

  if (farmerCategory?.length === 0) return <NoFarmer />


  return (
    <>
      <div className={styles['container']}>
      {/* <Search placeholder="Search Farmers..."/> */}

        <Suspense fallback={<CardsSkeleton />}>
          {categoryFarmers}
        </Suspense>
      </div>
    </>
  );
};

