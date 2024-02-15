'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/navigation/Navigation.module.css';
import {deleteToken} from '@/app/lib/serverData';
import ToastApprovedLogin from "@/app/ui/toast/ToastApprovedLogin";


export default function LogoutButtonUser() {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const handler = async () => {
    const isLoggingOut = await deleteToken();
    isLoggingOut;
    setIsLoading(true);

    router.refresh();
  }


  return (
      <div className={`${styles['link']}`}>
        <button >
          {isLoading ? <span>Logging Out</span> : <div onClick={handler}>Logout</div>}
        </button>
      </div>
  );
};
