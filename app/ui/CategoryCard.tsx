import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/CategoryCard.module.css';
import PageWrapper from '../PageWrapper';

export function CategoryCard(itemData: any) {
    const data = itemData?.itemData;

    return (
        <PageWrapper>
            <div className={styles['container']}>
                <Link href={data?.directTo}>
                    <div className={styles["container"]}>
                        <div className={styles["box"]}>
                            <span className={styles["title"]} dangerouslySetInnerHTML={{ __html: data?.linkName }}></span>
                        </div>
                    </div>
                </Link>
            </div>
        </PageWrapper>
    );
}
