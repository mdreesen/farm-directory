import styles from '../styles/Hero.module.css';

export default function Hero(props) {
    return (
        <div className={styles['heroContainer']}>
            <video autoPlay width="250" loop muted className={styles['hero']}>
                <source src={props.source} type="video/mp4" />
            </video>
            <h1 className={styles['title']}>Farm Directory</h1>
        </div>
    )
}