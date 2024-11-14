import CardFarmers from '@/ui/cards/CardFarmers';

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
        <CardFarmers category="Wheat Straw" searchParams={searchParams} />
      </div>
    </main>
  );
}
