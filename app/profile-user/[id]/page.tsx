import React from 'react';
import InfoDetails from '@/app/ui/profileUser/InfoDetails';
import styles from '@/app/styles/farmer/FarmerProfile.module.css';

import { fetchSingleUserByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
  const auth = await loggedInUserData();
  const userData = await fetchSingleUserByEmail(auth?.email ?? '');

  return (
    <div className={styles['container']}>
      <InfoDetails data={userData} />
    </div>
  );
}