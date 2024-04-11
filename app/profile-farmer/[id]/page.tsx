import React from 'react';
import FarmerInfoDetails from '@/app/ui/farmerProfile/FarmerInfoDetails';
import FarmerProductDetails from '@/app/ui/farmerProfile/FarmerProductDetails';
import styles from '@/app/styles/FarmerProfile.module.css';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
  const auth = await loggedInUserData();
  const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

  return (
    <div className={styles['container']}>
      <FarmerInfoDetails data={farmerUserData} />
      <FarmerProductDetails data={farmerUserData} />
    </div>
  );
}