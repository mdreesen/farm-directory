import { searchUsers } from '@/app/lib/data';
import FarmerTable from '@/app/ui/dashboard/FarmerTable';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const farmers = await searchUsers(query);

  return (
    <main>
      <FarmerTable customers={farmers} />
    </main>
  );
}