"use client";
import React from 'react';
import styles from '@/app/styles/FarmerProfile.module.css';
import Link from 'next/link';
import {authUser} from '@/app/composables/authUser';
import {isUser} from '@/app/composables/authUser';


export default function Page({ params }: any) {

  const { user, error, isLoading } = authUser();

  isUser


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles['container']}>
      <span>Email: {user?.email}</span>
      <span>Updated: {user?.updated_at}</span>

      <Link href={`/profile-farmer/${user?.email}/edit-farmer`}>Update Profile</Link>
    </div>
  );
}
