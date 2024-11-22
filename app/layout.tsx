import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";
// Import components for overall pages
import Navigation from '@/ui/navigation/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Farm Directory",
  description: "Connecting farms to communities.",
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

          {/* Vercel Analytics */}
          <Analytics />

          {/* Vercel Speed insights */}
          <SpeedInsights />

          {/* Google Analytics */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MQ18H2MPZ1"></Script>
          <Script id="google-analytics">
            {
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MQ18H2MPZ1');
              `
            }

          </Script>

          {/* Gozen Email Popup */}
          <script id="gozen-main" data-app_id="c8f8eac6-702a-4fac-af7f-c7e6e0a7a708" src="https://signup-forms-cdn.app.gozen.io/v1/gozen-main.js" type="text/javascript" defer async />

        </body>
      </Provider>
    </html>
  );
}
