import Image from 'next/image';

import styles from '../styles/Card.module.css';

export default function Card(props) {
    return (
        <div key={`${props.name}`}>
            <div className={styles['cardContainer']}>
                <Image
                    src={props.logo}
                    alt={props.logo}
                    width={300}
                    height={220}
                    object-fit={"cover"}
                    blurDataURL="data:..." // automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}