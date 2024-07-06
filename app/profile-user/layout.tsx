import Link from 'next/link';

import styles from '@/app/styles/farmer/FarmerDetails.module.css';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const auth = await loggedInUserData();

    return (
        <div className={styles['profile-links']}>
            <div className={styles['update-links']}>
                <Link href={`/profile-user/${auth?.id}`}>Profile</Link>
                <Link href={`/profile-user/${auth?.id}/update`}>Update Profile</Link>
            </div>
            {children}
        </div>
    );
};
