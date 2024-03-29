import React from 'react';
import styles from '@/app/styles/About.module.css';
import aboutText from "@/utils/aboutText.json";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Farm Directory',
}

export default function about() {

    const about = aboutText?.map((item: any, index: number) => {
        return (
            <div key={`${item?.title}: ${index}`}>
                <h2>{item?.title ?? ''}</h2>
                <p>{item?.description ?? ''}</p>
            </div>
        )
    });

    return (
        <div className={styles['main']}>
            {about}
        </div>
    );
};

