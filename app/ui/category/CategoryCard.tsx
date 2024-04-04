import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/styles/CategoryCard.module.css';
import WrapperNavCard from '@/app/wrappers/WrapperNavCard'

export function CategoryCard(itemData: any) {
    const data = itemData?.itemData;

    const title = <span className={styles["title"]} dangerouslySetInnerHTML={{ __html: data?.linkName }}></span>

    const useIcons = data?.icon && (
        <Link href={data?.directTo}>
            <div className={styles['container-image']}>
                <Image
                    className={`${styles['image']}`}
                    src={`/images/icons/navigation/${data?.icon}`}
                    width={500}
                    height={500}
                    priority={true}
                    object-fit="cover"
                    alt={`Navigate to ${data?.linkName}`}
                />
            </div>
            {title}
        </Link>
    );

    const useText = !data?.icon && (
        <Link href={data?.directTo}>
            <div className={styles['container-text']}>
                {title}
            </div>
        </Link>
    )


    return (
        <WrapperNavCard>
            <div className={styles['container']}>
                {useIcons}
                {useText}
            </div>
        </WrapperNavCard>
    );
}
