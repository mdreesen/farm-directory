import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CookiesProvider } from 'next-client-cookies/server';
import { loggedInUserData } from '@/app/lib/cookieData';

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

  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <Navigation />
        <MobileNavigation auth={auth} />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
