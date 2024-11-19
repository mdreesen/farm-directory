import NavigationProfileFarmer from '@/ui/navigation/NavigationProfileFarmer';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { fetchSingleUserById } from '@/actions/user';
import ButtonSendVerificationEmail from '@/ui/buttons/ButtonSendVerificationEmail';
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await fetchSingleUserById() as any;
  const verified = user.verified_farmer;

  return (
    <>
      <div className="bg-white min-h-full pt-[4rem]">
        {verified && <NavigationProfileFarmer />}

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{verified ? 'Dashboard' : 'You have not verified your email'}</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <NextSSRPlugin
                /**
                 * The `extractRouterConfig` will extract **only** the route configs
                 * from the router to prevent additional information from being
                 * leaked to the client. The data passed to the client is the same
                 * as if you were to fetch `/api/uploadthing` directly.
                 */
                routerConfig={extractRouterConfig(ourFileRouter)}
              />
              {verified ? children : <h1>Please verify your email to gain access <ButtonSendVerificationEmail/></h1>}
            </div>
          </main>
        </div>
      </div>
    </>
  )
};