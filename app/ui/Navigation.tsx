import Link from 'next/link';
import styles from '@/app/styles/Navigation.module.css';
import { cookies } from 'next/headers';
import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';


export default async function Navigation() {
  const cookiesList = cookies()
// console.log(cookiesList);
const hasCookie = cookiesList.has(`${process.env.COOKIE_KEY}`)
// console.log(hasCookie)


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

  const authenticate = hasCookie ? (
    <LogoutButtonUser/>
  ) : (
    <Link href={'/authentication/signup'} className={styles['link']}>Signup</Link>
  );

  return (
    <div className={styles['container']}>
      {links}
      {authenticate}
    </div>
  );
}

