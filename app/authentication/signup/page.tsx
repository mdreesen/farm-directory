import React from 'react';
import { AuthenticationForm } from '@/app/ui/forms/authentication/AuthenticationForm';
import styles from '@/app/styles/Home.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}


export default function Page() {

  return (
    <>
      <div>
        {/* <AuthenticationForm/> */}
        <AuthenticationForm/>
      </div>
    </>
  );
}
