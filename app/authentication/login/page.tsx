import Login from '@/app/ui/forms/authentication/Login';
import { Metadata } from 'next';
import styles from '@/app/styles/authentication/Auth.module.css';

export const metadata: Metadata = {
  title: 'Login',
}

export default function Page() {
   

    return (
        <div className={styles['container']}>
            <Login/>
        </div>
    )
};