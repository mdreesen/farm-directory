import type { Metadata, Viewport } from "next";

import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Style Sheets and styles
import './globals.css';
import 'radar-sdk-js/dist/radar.css';
const inter = Inter({ subsets: ['latin'] })

// Components
import Navigation from "@/app/ui/navigation/Navigation";
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

  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
      <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
      <script id="gozen-main" data-app_id="c8f8eac6-702a-4fac-af7f-c7e6e0a7a708" src="https://signup-forms-cdn.app.gozen.io/v1/gozen-main.js" type="text/javascript" defer async />
    </html>
  )
}
