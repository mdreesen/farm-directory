import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import Navigation from "@/app/ui/Navigation";
import MobileNavigation from './ui/MobileNavigation';
import { Footer } from "@/app/ui/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Farm Directory',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <title>The Farm Directory</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="google-site-verification" content="hEmogV9ZodUsj8jMDwJg4yjV_0a55BqvcqulRHxVpZY" />
      </Head>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <Navigation />
        <MobileNavigation />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
