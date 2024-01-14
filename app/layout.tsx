import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react';

import Navigation from "@/app/ui/Navigation";
import { Footer } from "@/app/ui/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farm Directory',
  description: 'Farm Directory',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <Suspense fallback={<h3>Loading...</h3>}><Navigation /></Suspense>
        {children}
        <Footer />
      </body>
    </html>
  )
}
