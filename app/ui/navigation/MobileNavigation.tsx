import Link from 'next/link';
import styles from '@/app/styles/Navigation.module.css';
import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';
import { loggedInUserData } from '@/app/lib/cookieData';


export default async function MobileNavigation() {
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
      linkName: "Feed/Bedding",
      goTo: "/feed-bedding"
    },
    {
      linkName: "Agritourism",
      goTo: "/agritourism"
    },
    {
      linkName: "Farm Services",
      goTo: "/farm-services"
    }
  ];


  const links = navLinks.map((items, index) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);

  const authenticate = auth ? (
    <LogoutButtonUser />
  ) : (
    <>
      <Link href={'/authentication/signup'} className={styles['link']}>Signup</Link>
      <Link href={'/authentication/login'} className={styles['link']}>Login</Link>
    </>);

  const admin = auth?.isAdmin ? <a href={`/admin/dashboard`} className={styles['link']}>Dashboard</a> : '';


  const farmerProfile = auth?.isFarmer ? <a href={`/profile-farmer/${auth?.id}`} className={styles['link']}>Profile</a> : '';

  return (
    <div>
      <div className={styles['mobile-container']}>
        {links}
        {admin}
        {farmerProfile}
      </div>
      <div className={`${styles['mobile-container-auth']} justify-center`}>
        {authenticate}
      </div>
    </div>
  );
}
