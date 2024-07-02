import Link from 'next/link';
import Image from 'next/image'
import styles from '@/app/styles/navigation/Navigation.module.css';
import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';
import { loggedInUserData } from '@/app/lib/cookieData';


import loggedOutLinks from './loggedOutLinks.json';
import loggedInLinks from './loggedInLinksDesktop.json';
import farmerLinks from './farmerLinks.json';

export default async function Navigation() {
  const auth = await loggedInUserData();

  const userLinks = [
    {
      "linkName": "Farm To Table",
      "goTo": "/farm-to-table"
    },
    {
      "linkName": "Live Animals",
      "goTo": "/live-animals"

    },
    {
      "linkName": "Feed/Bedding",
      "goTo": "/feed-bedding"
    },
    {
      "linkName": "Farm Events & Agritourism",
      "goTo": "/farmevents-agritourism"
    },
    {
      "linkName": "Farm Services",
      "goTo": "/farm-services"
    },
    {
      "linkName": "Map",
      "goTo": "/map-farmers"
    },
    {
      "linkName": "Profile",
      "goTo": `/profile-user/${auth?.id}`
    }
  ];

  const navItems = () => {
    switch (true) {
      case auth?.isAdmin:
        return loggedInLinks
        break;

      case auth?.isFarmer:
        return farmerLinks
        break;

      case auth !== undefined:
        return userLinks;
        break

      default:
        return loggedOutLinks
    }
  };

  const links = navItems().map((items: any, index: number) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);

  const authenticate = auth && <LogoutButtonUser />

  const farmerProfile = auth?.isFarmer ? <a href={`/profile-farmer/${auth?.id}`} className={styles['link']}>Profile</a> : '';


  return (
    <div className={styles['container']}>
      {links}
      {farmerProfile}
      {authenticate}
    </div>
  );
}