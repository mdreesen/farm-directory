import Image from "next/image";

import styles from '../styles/Hero.module.css';

export default function Hero(props) {

    const video = props.video ? (
        <div className={styles['heroContainer']}>
            <video autoPlay width="250" loop muted className={styles['hero']}>
                <source src={props.source} type="video/mp4" />
            </video>
            <h1 className={styles['title']}>Farm Directory</h1>
        </div>
    ) : '';

    const image = props.image ? (
        <div className={styles['heroContainer']}>
            <Image
                className={styles['backgroundImg']}
                src={`/images/background/${props.source}.webp`}
                alt={props.heroImage}
                fill
            />
            <h1 className={styles['title']}>{props.imageTitle}</h1>
        </div>

    ) : ''

    return (
        <div>
            {video}
            {image}
        </div>
    )
};
