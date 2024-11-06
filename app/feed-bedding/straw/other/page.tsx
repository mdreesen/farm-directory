import CardFarmers from '@/ui/cards/CardFarmers';

export default async function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <CardFarmers category="Other Straw"/>
      </div>
    </main>
  );
}
