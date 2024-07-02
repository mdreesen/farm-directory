
import { Suspense } from 'react';
import styles from '@/app/styles/map/FarmersMap.module.css';
import { Metadata } from 'next'
import FarmersMap from '@/app/ui/maps/FarmersMap';
import { fetchFarmers, fetchFarmersCoordinates } from '@/app/lib/dataFarmer/data';

export const metadata: Metadata = {
  title: 'Farmers Map | The Farm Directory',
  description: 'Map of farmers',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const allFarmersCoordinates = await fetchFarmersCoordinates() as any;

  return (
    <>
      <div className={styles['container']}>
        <FarmersMap data={allFarmersCoordinates} />
      </div>
    </>
  );
}

