'use server'
import { Suspense } from 'react';
import styles from '@/app/styles/Farmer.module.css';
import { fetchFarmers } from '@/app/composables/data';
import { filterFarmerProducts } from '@/app/composables/farmerData/filterFarmerFarmToTable';
import FarmerCard from "@/app/ui/farmer/FarmerCard";
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';


export default async function Page() {
  const farmers = await fetchFarmers();
  const farmerCategory = await filterFarmerProducts(farmers?.farmers, 'Hauling');
  const categoryFarmers = farmerCategory?.map((item: Object, index: number) => <FarmerCard key={index} farmerData={item} />);

  if (farmerCategory.length === 0) return <NoFarmer />

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

