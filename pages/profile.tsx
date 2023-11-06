import React from 'react';
import Head from 'next/head';
import styles from 'styles/Farmer.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';
import { EditProfileForm } from 'components/forms/EditProfileForm';

export default function UserProfilePage() {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>User | Profile</title>
        <meta name='description' content='Farm Directory Farmer Search' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className={styles['container']}>
          <br />
          <div className={styles['container']}>{user && <div>{user.name}</div>}</div>
          <EditProfileForm />
        </div>
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   try {
//     const { documents } = await ax.farmers.find;
//     return {
//       props: { farmers: documents },
//     };
//   } catch (error) {
//     LogError(error);
//     return { props: {} };
//   }
// }
