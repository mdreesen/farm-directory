'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/navigation/Navigation.module.css';


export default function ButtonResetEmail() {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const handler = async () => {
    await fetch('/api/send/reset-password', {
      method: "POST",
      cache: 'no-store',
      body: JSON.stringify({
        // from: 'Admin <admin@thefarmdirectory.com>',
        from: 'Acme <onboarding@resend.dev>',
        to: ['mdreesen90@gmail.com'],
        subject: 'Test Email',
      })
    });
  }


  return (
    <button className={styles['link']}>
      {!isLoading && <div onClick={handler}>Reset Password</div>}
    </button>
  );
};
