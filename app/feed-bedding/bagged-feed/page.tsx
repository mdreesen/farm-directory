import { Metadata } from 'next';
import CardFarmers from '@/ui/cards/CardFarmers';

export const metadata: Metadata = {
  title: 'Feed and Bedding | Bagged Feed',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <CardFarmers category="Bagged Feed" searchParams={searchParams} />
      </div>
    </main>
  );
}
