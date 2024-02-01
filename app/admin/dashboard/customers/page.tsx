import { Suspense } from 'react';
import CardsFarmer from '@/app/ui/dashboard/cardsFarmers';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';


  return (
    <main>
      <Suspense fallback={<CardsSkeleton />}>
        <CardsFarmer />
      </Suspense>
    </main>
  );
}