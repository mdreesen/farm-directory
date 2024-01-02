import React from 'react';
import styles from '@/app/styles/Home.module.css';

import { useUser } from '@auth0/nextjs-auth0/client';



export default function Page() {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

  return (
    <>
        <div>hello</div>
    </>
  );
}
