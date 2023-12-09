import React from 'react';
import Link from 'next/link';
import styles from '../styles/CategoryCard.module.css';

export function CategoryCard(itemData: any) {
    console.log(itemData?.itemData)
    const data = itemData?.itemData
    return (
        <Link href={data?.directTo}>
        <div className={styles["container"]}>
            <div className={styles["box"]}>
                <span className={styles["title"]}>{data?.linkName}</span>
                <div>
                    <strong>JOE WATSON SBF</strong>
                    <p>0000 000 000 0000</p>
                    <span>VALID</span> <span>01/28</span>
                </div>
            </div>
        </div>
        </Link>
    );
}
