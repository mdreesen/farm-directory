import React from 'react';
import Head from 'next/head';
import styles from '/styles/Home.module.css';


export default function signUp() {


  return (
    <>
      <Head>
        <title>Home | Farm Directory</title>
        <meta name='description' content='Farm Directory Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>Hello There</h1>
      </main>
    </>
  );
}
