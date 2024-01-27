import React from 'react';
import styles from '@/app/styles/Home.module.css';
import { ContactUs } from '@/app/ui/forms/ContactUs';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
}


export default function Page() {

  return (
      <div className={styles.main}>
        <ContactUs/>
      </div>
  );
}
