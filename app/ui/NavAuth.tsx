import Link from 'next/link';
import styles from '@/app/styles/NavAuth.module.css';
import LogoutButtonUser from '@/app/ui/buttons/logoutButtonUser';
import {loggedInUserData} from '@/app/lib/cookieData';


export default async function NavAuth() {
  const auth = await loggedInUserData();

  const navLinks = [
    {
      linkName: "Home",
      goTo: "/"
    },
    {
      linkName: "Farm To Table",
      goTo: "/farm-to-table"
    }
  ];


  const links = navLinks.map((items, index) => <Link href={items?.goTo} key={`${items?.linkName}-${index}`} className={styles['link']}>{items?.linkName}</Link>);

  const authenticate = auth ? (
    <LogoutButtonUser/>
  ) : (
    <Link href={'/authentication/signup'} className={styles['link']} dangerouslySetInnerHTML={{ __html: 'Signup' }}></Link>
  );

  const farmerProfile = auth?.isFarmer ? <a href={`/profile-farmer/${auth?.id}`} className={styles['link']}>Profile</a> : '';

  return (
    <div className={styles['container']}>
      {authenticate}
    </div>
  );
}

