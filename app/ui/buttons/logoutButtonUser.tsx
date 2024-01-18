'use client';
import { useRouter } from "next/navigation";
import styles from '@/app/styles/Navigation.module.css';


export default async function LogoutButtonUser() {
  const router = useRouter();

  const handleLogout = async () => {

    const res = await fetch("/api/Authentication/logout", {
      method: "GET",
      cache: 'no-store',
    });

    if (!res.ok) throw new Error("Failed to update Farmer");
    router.refresh()
  };


  return (
    <a href='/'>
      <div className={styles['link']}>
        <button onClick={handleLogout} >
          <div >Logout</div>
        </button>
      </div>
    </a>
  );
};
