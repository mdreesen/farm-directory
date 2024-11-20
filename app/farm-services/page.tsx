import CardNavigation from '@/ui/cards/CardNavigation';

// Navigation
import route from '@/utils/routes/farmServices/routes.json';

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <CardNavigation route={route} />
      </div>
    </main>
  );
}
