'use client'
import { useSession } from "next-auth/react"
import styles from '@/app/styles/FarmerDetails.module.css';

export default function FarmerUpdate(data) {
    const { data: session } = useSession();

    const showUpdateButton = session?.user?.isFarmer;

    return showUpdateButton && <div className={styles['update']}><a href={`/profile-farmer/${data?.data}/update`} className={styles['update-link']}>Update Information</a></div>
};