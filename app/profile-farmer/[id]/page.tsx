import React from 'react';
import styles from '@/app/styles/FarmerProfile.module.css';
import Link from 'next/link';
import { isUser } from '@/app/composables/data';


export default async function Page({ params }: any) {

  const mongoUser = await isUser();

  const mongoUserData = mongoUser?.user?.filter((item: any) => item?._id === params?.id);
  const findUserData = mongoUserData?.find((user: any) => user);
  console.log(findUserData?.isFarmer);


  return (
    <div className={styles['container']}>
      <span>Email: {findUserData?.email}</span>

      <Link href={`/profile-farmer/${params.id}/edit-farmer`}>Update Profile</Link>
    </div>
  );
}