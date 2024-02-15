import React from 'react';
import FarmerDetails from '@/app/ui/farmer/FarmerDetails';
import styles from '@/app/styles/FarmerProfile.module.css';
import { cookies } from 'next/headers'

import { fetchSingleFarmerByEmail, fetchSingleFarmer, fetchFarmers } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
  const cookieStore = cookies()
  const theme = cookieStore.get(`${process.env.COOKIE_KEY}`);
  const themeEmail = cookieStore.get(`${process.env.COOKIE_EMAIL}`);

console.log('theme', theme?.value)
  const farmerUserData = await fetchSingleFarmerByEmail(themeEmail?.value.toString());
console.log(farmerUserData)

const fetchUsers = await fetchFarmers();
// console.log(fetchUsers)

  return (
    <div className={styles['container']}>
      {/* <FarmerDetails data={farmerUserData} /> */}
    </div>
  );
}