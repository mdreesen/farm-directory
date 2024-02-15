'use client'
import Link from 'next/link';
import styles from '@/app/styles/navigation/Navigation.module.css';
import { useSession, signOut } from "next-auth/react"

import loggedOutLinks from './loggedOutLinks.json';
import loggedInLinks from './loggedInLinks.json';
import adminLinks from './adminLinks.json';
import farmerLinks from './farmerLinks.json';

export default function Navigation() {
  const { data: session, status } = useSession();

  const navItems = () => {
    switch(true) {
      case session?.user?.isAdmin:
        return loggedInLinks
        break;

    case session?.user?.isFarmer:
      return farmerLinks
      break;
  
      case session?.user?.id:
        return loggedInLinks;
        break

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
      {session?.user?.isFarmer && <Link href={`/profile-farmer/${session?.user?.id?.toString()}`} className={styles['link']}>Profile</Link>}
    </div>
  );
}

