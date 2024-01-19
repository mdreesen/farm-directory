import Link from 'next/link';
import styles from '@/app/styles/Navigation.module.css';
import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';
import {loggedInUserData} from '@/app/lib/cookieData';

export default async function Navigation() {
  const auth = await loggedInUserData();

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
    }
  ];

  // console.log('nav bar', auth);

  const links = navLinks.map((items, index) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);

  const authenticate = auth ? (
    <LogoutButtonUser/>
  ) : (
    <Link href={'/authentication/signup'} className={styles['link']}>Signup</Link>
  );

  const farmerProfile = auth?.isFarmer ? <Link href={`/profile-farmer/${auth?.id}`} className={styles['link']}>Profile</Link> : ''


  return (
    <div className={styles['container']}>
      {links}
      {farmerProfile}
      {authenticate}
    </div>
  );
}

