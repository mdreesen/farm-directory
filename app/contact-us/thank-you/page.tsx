import Link from "next/link";
import styles from "@/app/styles/CreateFarmer.module.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Contact Us',
  description: 'Contact us, thank you Farm Directory',
}

export default function Page() {

    return (
        <div className={styles['created']}>
            <span>Your form has been submitted</span>
            <span>Thank You!</span>

            <Link href="/" className={styles['button']}>Keep Browsing</Link>
        </div>
    )
}