'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/navigation/Navigation.module.css';
import { deleteToken } from '@/app/lib/serverData';


export default function LogoutButtonUser() {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const handler = async () => {
    router.push(`/`);
    router.refresh();

    const isLoggingOut = await deleteToken();
    isLoggingOut;
    setIsLoading(true);

    router.push(`/`);
    router.refresh();
  }


  return (
    <button className={styles['link']}>
      {!isLoading && <div onClick={handler}>Logout</div>}
    </button>
  );
};
