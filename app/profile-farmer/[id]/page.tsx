import React from 'react';
import styles from '@/app/styles/FarmerProfile.module.css';


export default async function Page({ params }: any) {

  return (
    <div className={styles['container']}>
      <span>This is profile for the future</span>
    </div>
  );
}
