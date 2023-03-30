import React from 'react';
import { Navigation } from './Navigation';
import { ReactNode } from 'react';
import Footer from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
