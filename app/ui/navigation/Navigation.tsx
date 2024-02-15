import Link from 'next/link';
import styles from '@/app/styles/navigation/Navigation.module.css';
import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';
import {loggedInUserData} from '@/app/lib/cookieData';


import loggedOutLinks from './loggedOutLinks.json';
import loggedInLinks from './loggedInLinks.json';
import farmerLinks from './farmerLinks.json';

export default async function Navigation() {
  const auth = await loggedInUserData();

  console.log(auth)

  const navItems = () => {
    switch(true) {
      case auth?.isAdmin:
        return loggedInLinks
        break;

    case auth?.isFarmer:
      return farmerLinks
      break;
  
      case auth !== undefined:
        return loggedInLinks;
        break

      default:
        return loggedOutLinks
    }
  }

  const links = navItems().map((items: any, index: number) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);

  const authenticate = auth && <LogoutButtonUser/>

  const admin = auth?.isAdmin ? <a href={`/admin/dashboard`} className={styles['link']}>Dashboard</a> : '';

  const farmerProfile = auth?.isFarmer ? <a href={`/profile-farmer/${auth?.id}`} className={styles['link']}>Profile</a> : '';


  return (
    <div className={styles['container']}>
      {links}
      {admin}
      {farmerProfile}
      {authenticate}
    </div>
  );
}

