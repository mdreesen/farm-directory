import '/styles/globals.css';
import '/sass/main.scss';
import React from 'react';
import axios from 'axios';
import { Layout } from 'components/Layout';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
