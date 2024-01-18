import Link from 'next/link';
import styles from '@/app/styles/Navigation.module.css';
import { isLoggedIn } from '../lib/data';
// import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';


export default async function MobileNavigation() {
  const loggedIn = isLoggedIn();

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


  const links = navLinks.map((items, index) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);

  return (
    <div className={styles['mobile-container']}>
      {links}
    </div>
  );
}

