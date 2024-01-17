// 'use server'
import CardWrapper from '@/app/ui/dashboard/cards';
import UsersChart from '@/app/ui/dashboard/users-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

// Fetching skeleton
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '@/app/ui/loading/skeletons';


export default async function Page() {


  return (
    <main>
      <h1 className={`text-white font-bold mb-4 text-2xl md:text-4xl flex justify-center`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>

      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <UsersChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices /> 
        </Suspense>

      </div>
    </main>
  );
}