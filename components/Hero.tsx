import React from 'react';
import Image from 'next/image';
import styles from 'styles/Hero.module.css';

export function Hero({
  video,
  source,
  image,
  imageTitle,
}: {
  video?: boolean;
  image?: boolean;
  source: string;
  imageTitle?: string;
}) {

  const downArrow = (
<div className={styles["center-con"]}>
    
    <div className={styles["round"]}>
        <span className={styles['arrowSpan']} />
        <span className={styles['arrowSpan']} />
        <span className={styles['arrowSpan']} />
        <span className={styles['arrowSpan']} />
    </div>
    
</div>
  );
  return (
    <div>
      {video && (
        <div className={styles['heroContainer']}>
          <video autoPlay width='250' loop muted className={styles['hero']}>
            <source src={source} type='video/mp4' />
          </video>
          <h1 className={styles['title']}>
            Farm Directory

            {downArrow}
            </h1>
        </div>
      )}
      {image && (
        <div className={styles['heroContainer']}>
          <Image
            className={styles['backgroundImg']}
            src={`/images/background/${source}.webp`}
            alt={source}
            fill
            priority
          />
          <h1 className={styles['title']}>{imageTitle}</h1>
        </div>
      )}
    </div>
  );
}
