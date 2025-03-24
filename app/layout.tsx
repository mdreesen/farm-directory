import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import Script from "next/script";
// Import components for overall pages
import Navigation from '@/ui/navigation/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | The Farm Directory',
    default: 'The Farm Directory',
  },
  description: 'Connecting farms to communities.',
  metadataBase: new URL('https://thefarmdirectory.com'),

  generator: 'Next.js',
  applicationName: 'The Farm Directory',
  referrer: 'origin-when-cross-origin',
  keywords: ['Farm', 'Directory', 'Farmers', 'Farmer'],
  authors: [{ name: 'Michael' }, { name: 'Michael', url: 'www.mdreesen.com' }],
  creator: 'Michael',
  publisher: 'Michael',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Navigation />
          {children}

          {/* Vercel Speed insights */}
          <SpeedInsights />

          {/* Google Analytics */}
          <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS}`} />
          <GoogleTagManager gtmId={`${process.env.GOOGLE_ANALYTICS}`} />


          {/* <Script async strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}></Script>
          <Script id="google-analytics" strategy="lazyOnload">
            {
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.GOOGLE_ANALYTICS}');
              `
            }

          </Script> */}

          {/* Gozen Email Popup */}
          <script id="gozen-main" data-app_id="c8f8eac6-702a-4fac-af7f-c7e6e0a7a708" src="https://signup-forms-cdn.app.gozen.io/v1/gozen-main.js" type="text/javascript" defer async />

        </body>
      </Provider>
    </html>
  );
}
