import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { loggedInUserData } from '@/app/lib/cookieData';
import styles from '@/app/styles/layout.module.css';

// Style Sheets and styles
import './globals.css';
import 'radar-sdk-js/dist/radar.css';
const inter = Inter({ subsets: ['latin'] })

// Components
import Navigation from "@/app/ui/navigation/Navigation";
import { MobileNavigation } from './ui/navigation/mobile/MobileNavigation';
import { Footer } from "@/app/ui/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | The Farm Directory',
    default: 'The Farm Directory',
  },
  description: 'Connecting farms to communities',
  metadataBase: new URL('https://thefarmdirectory.com'),
  generator: 'Next.js',
  applicationName: 'The Farm Directory',
  referrer: 'origin-when-cross-origin',
  keywords: ['Farm', 'Directory', 'The Farm Directory', 'Farmers'],
  authors: [{ name: 'Michael' }],
  creator: 'White Raven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'hEmogV9ZodUsj8jMDwJg4yjV_0a55BqvcqulRHxVpZY',
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const auth = await loggedInUserData();

  const desktopHeader = (
    <div className={`${styles['desktopNav']}`}>
      <Navigation />
      <div className='w-[16rem] mt-14'>
        <Link href="/">
          <Image
            priority={true}
            className="w-100 h-100 rounded-full mr-4"
            src="/images/logos/logo.webp"
            width={1236}
            height={531}
            alt="Picture of barn and silo with The Farm Directory.com text"
          />
        </Link>
      </div>
    </div>
  );

  const mobileHeader = (
    <div className={`${styles['mobileNav']}`}>
      <MobileNavigation auth={auth} />
      <div className='w-[16rem]'>
        <Link href="/">
          <Image
            priority={true}
            className="w-100 h-100 rounded-full mr-4"
            src="/images/logos/logo.webp"
            width={1236}
            height={531}
            alt="Picture of barn and silo with The Farm Directory.com text"
          />
        </Link>
      </div>
    </div>
  );

  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        {desktopHeader}
        {mobileHeader}
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
