import { Metadata } from 'next';
import CardNavigation from '@/ui/cards/CardNavigation';

export const metadata: Metadata = {
  title: 'Feed and Bedding | Straw',
};

// Navigation
import route from '@/utils/routes/feedBedding/straw/routes.json';

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <CardNavigation route={route} />
      </div>
    </main>
  );
}
