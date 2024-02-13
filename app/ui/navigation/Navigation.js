'use client'
import Link from 'next/link';
import styles from '@/app/styles/navigation/Navigation.module.css';
import { useSession, signOut } from "next-auth/react"

import loggedOutLinks from './loggedOutLinks.json';
import loggedInLinks from './loggedInLinks.json';
import adminLinks from './adminLinks.json';

export default function Navigation() {
  const { data: session, status } = useSession();

  const navItems = () => {
    switch(true) {
      case session?.user?.id:
        return loggedInLinks;
        break

      case session?.user?.isAdmin:
        return adminLinks
        break;

      default:
        return loggedOutLinks
    }
  }

  const links = navItems().map((data, index) => {
    return data?.linkName === 'Sign Out' ? <Link className={styles['link']} href={data?.goTo} onClick={() => signOut()} key={`${data?.linkName}-${index}`}>{data?.linkName}</Link> : <Link href={data?.goTo} key={`${data?.linkName}-${index}`} className={styles['link']}>{data?.linkName}</Link>
  });


  return (
    <div className={styles['container']}>
      {links}
    </div>
  );
}

