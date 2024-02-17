'use client'
import { useSession } from "next-auth/react"
import styles from '@/app/styles/FarmerDetails.module.css';

export default function FarmerUpdate(data) {
    const { data: session } = useSession();
    console.log(data?.data?.email)

    const showUpdateButton = session?.user?.isFarmer && data?.data?.email === session?.user?.email;

    return showUpdateButton && <div className={styles['update']}><a href={`/profile-farmer/${data?.data}/update`} className={styles['update-link']}>Update Information</a></div>
};