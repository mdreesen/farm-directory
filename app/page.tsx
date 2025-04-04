import { Metadata } from 'next';
import CardNavigation from '@/ui/cards/CardNavigation';

export const metadata: Metadata = {
  title: 'Home | The Farm Directory',
};

// Navigation
import route from '@/utils/routes/routes.json';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* <div className="absolute h-[600px] w-full overflow-hidden z-[-1] content-center items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]" /> */}
      <div className="relative flex justify-center items-center w-full place-items-center">
        <CardNavigation route={route} />
      </div>
    </main>
  );
}
