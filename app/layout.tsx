import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Suspense } from 'react';

import Navigation from "@/app/ui/Navigation";
import { Footer } from "@/app/ui/Footer";

import { isUser } from './composables/data';

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

  const mongoUser = await isUser();

  return (
    <html lang="en">
      <UserProvider>
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
          <Suspense fallback={<h3>Loading...</h3>}><Navigation mongoUser={mongoUser}/></Suspense>
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  )
}
