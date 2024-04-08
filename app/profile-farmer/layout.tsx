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
        <div className={styles['profile-links']}>
            <div className={styles['update-links']}>
                <Link href={`/profile-farmer/${auth?.id}`}>Profile</Link>
                <Link href={`/profile-farmer/${auth?.id}/information`}>Update Information</Link>
                <Link href={`/profile-farmer/${auth?.id}/make-products`}>Make Products</Link>
                <Link href={`/profile-farmer/${auth?.id}/products`}>All Products</Link>
            </div>
            {children}
        </div>
    );
};
