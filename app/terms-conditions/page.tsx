import React from 'react';
import styles from '@/app/styles/About.module.css';
import aboutText from "@/utils/aboutText.json";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Terms & Conditions for Farm Directory',
}

export default function Page() {

    return (
        <div className={styles['main']}>
            <div className={styles['container']}>
                <h2>Terms & Conditions</h2>
                <p>We will not be sued for anything that goes on this website...You pinky promise</p>
            </div>
        </div>
    );
};

