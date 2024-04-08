import Link from 'next/link';

import styles from '@/app/styles/FarmerDetails.module.css';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const auth = await loggedInUserData();

    return (
        <div>
            <div className={styles['update-links']}>
                <Link href={`/profile-farmer/${auth?.id}`}>Profile</Link>
                <Link href={`/profile-farmer/${auth?.id}/information`}>Update Information</Link>
                <Link href={`/profile-farmer/${auth?.id}/update`}>Make Products</Link>
            </div>
            {children}
        </div>
    );
};
