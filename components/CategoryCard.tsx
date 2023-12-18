import React from 'react';
import Link from 'next/link';
import styles from '../styles/CategoryCard.module.css';

export function CategoryCard(itemData: any) {
    const data = itemData?.itemData;

    return (
        <Link href={data?.directTo}>
            <div className={styles["container"]}>
                <div className={styles["box"]}>
                    <span className={styles["title"]}>{data?.linkName}</span>
                    <div>
                        <strong>Navigate</strong>
                    </div>
                </div>

            </div>
        </Link>
    );
}
