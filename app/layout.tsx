import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
          <Analytics />
          <SpeedInsights />
          <script id="gozen-main" data-app_id="c8f8eac6-702a-4fac-af7f-c7e6e0a7a708" src="https://signup-forms-cdn.app.gozen.io/v1/gozen-main.js" type="text/javascript" defer async />
        </body>
      </Provider>
    </html>
  );
}
