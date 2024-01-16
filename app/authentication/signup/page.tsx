import React from 'react';
import { AuthenticationForm } from '@/app/ui/forms/authentication/AuthenticationForm';
import styles from '@/app/styles/Home.module.css';


export default function Page() {

  return (
    <>
      <div className={styles.main}>
        {/* <AuthenticationForm/> */}
        <AuthenticationForm/>
      </div>
    </>
  );
}
