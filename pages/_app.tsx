import React from 'react';
import axios from 'axios';
import { Layout } from '../components/Layout';
import { AppProps } from 'next/app';
import '/styles/globals.css';

axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
