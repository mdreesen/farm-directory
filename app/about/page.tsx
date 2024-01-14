import React from 'react';
import styles from '@/app/styles/About.module.css';
import aboutText from "@/utils/aboutText.json";

export default function about() {

    const about = aboutText?.map((item: any, index: number) => {
        return (
            <>
                <section key={`${item?.title}: ${index}`}>
                    <h2>{item?.title ?? ''}</h2>
                    <p>{item?.description ?? ''}</p>
                </section>
            </>
        )
    })

    return (
        <>
            <div className={styles['main']}>
                {about}
            </div>
        </>
    );
}

