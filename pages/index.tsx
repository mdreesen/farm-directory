import React from 'react';
import { Hero } from 'components/Hero';
import Head from 'next/head';
import styles from '/styles/Home.module.css';

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Home | Farm Directory</title>
        <meta name='description' content='Farm Directory Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Hero video source={'/videos/hero-video.mp4'} />
        <section className={styles.about}>
          <h2>Connecting local consumers to local farmers</h2>
          <h2>We advertise in your local areas to drive traffic to your listings</h2>
          <h2>Eliminating the need to build a website</h2>
        </section>
      </main>
    </>
  );
}
