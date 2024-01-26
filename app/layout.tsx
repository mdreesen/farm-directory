import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import Navigation from "@/app/ui/Navigation";
import MobileNavigation from './ui/MobileNavigation';
import { Footer } from "@/app/ui/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Farm Directory',
    default: 'Farm Directory',
  },
  description: 'A place where users can find local farmers for products',
  metadataBase: new URL('https://thefarmdirectory.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
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
