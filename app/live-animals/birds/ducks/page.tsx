import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { fetchFarmers } from '@/app/lib/data';
import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import FarmerCard from "@/app/ui/farmer/FarmerCard";
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ducks Live Animals',
}


export default async function Page() {
  const farmers = await fetchFarmers();
  const farmerCategory = await filterFarmerProducts(farmers, 'Live Ducks');
  const categoryFarmers = farmerCategory?.map((item: Object, index: number) => <FarmerCard key={index} farmerData={item} />);

  if (farmerCategory?.length === 0) return <NoFarmer />

  return (
    <>
      <div className={styles['container']}>
        <Suspense fallback={<CardsSkeleton />}>
          {categoryFarmers}
        </Suspense>
      </div>
    </>
  );
}

