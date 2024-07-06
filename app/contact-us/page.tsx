import React from 'react';
import styles from '@/app/styles/contact/Contact.module.css';
import { ContactUs } from '@/app/ui/forms/ContactUs';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact us Farm Directory',
}


export default function Page() {

  return (
      <div className={styles.main}>
        <ContactUs/>
      </div>
  );
}
