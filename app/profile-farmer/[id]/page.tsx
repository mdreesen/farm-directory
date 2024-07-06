import React from 'react';
import FarmerInfoDetails from '@/app/ui/profileFarmer/FarmerInfoDetails';
import FarmerProductDetails from '@/app/ui/profileFarmer/FarmerProductDetails';
import styles from '@/app/styles/farmer/FarmerProfile.module.css';

import { fetchSingleFarmerByEmail } from '@/app/lib/dataFarmer/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
  const auth = await loggedInUserData();
  const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

  return (
    <div className={styles['container']}>
      <FarmerInfoDetails data={farmerUserData} />
    </div>
  );
}