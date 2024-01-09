'use client'
import Link from 'next/link';
import styles from '@/app/styles/Navigation.module.css';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navigation(mongoUser: any) {

  const navLinks = [
    {
      linkName: "Home",
      goTo: "/"
    },
    {
      linkName: "Farm To Table",
      goTo: "/farm-to-table"
    },
    {
      linkName: "Live Animals",
      goTo: "/live-animals"

    },
    {
      linkName: "Hay",
      goTo: "/hay"
    },
    {
      linkName: "Straw",
      goTo: "/straw"
    },
    {
      linkName: "Farm Services",
      goTo: "/farm-services"
    },
    {
      linkName: "Farm Services",
      goTo: "/farm-services"
    },
  ];


  const { user } = useUser();
  const mongoUserData = mongoUser?.mongoUser?.user?.filter((item: any) => item?.email === user?.email);
  const findUserData = mongoUserData?.find((user: any) => user)


  const links = navLinks.map((items, index) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);
  // const notLoggedIn = <a href="/api/auth/login" className={styles['link']}>Login</a>
  // const isLoggedIn = <a href="/api/auth/logout" className={styles['link']}>Logout</a>

  const profile = user && <Link href={`/profile-farmer/${findUserData?._id}`}>Profile</Link>
  // const authorized = user ? isLoggedIn : notLoggedIn;


  return (
    <div className={styles['container']}>
      {links}
      {profile}
    </div>
  );
}

