import type { Metadata, Viewport } from "next";
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

const APP_NAME = "The Farm Directory";
const APP_DEFAULT_TITLE = "The Farm Directory";
const APP_TITLE_TEMPLATE = "%s | The Farm Directory";
const APP_DESCRIPTION = 'Connecting farms to communities';

export const metadata: Metadata = {
  applicationName: APP_NAME,
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
  },
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
      <div className={`${styles['logo']}`}>
        <Link href="/">
          <Image
            priority={true}
            className="w-100 h-100"
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
      <script id="gozen-main" data-app_id="c8f8eac6-702a-4fac-af7f-c7e6e0a7a708" src="https://signup-forms-cdn.app.gozen.io/v1/gozen-main.js" type="text/javascript" defer async />
    </html>
  )
}
