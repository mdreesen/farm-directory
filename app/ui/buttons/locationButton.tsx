'use client';
import styles from '@/app/styles/Navigation.module.css';
import { getLocation } from '@/app/lib/location';


export default function LocationButton() {


    return (
        <div className={styles['link']}>
            <button id="get-location" onClick={getLocation}>
                <div >Location</div>
            </button>
        </div>
    );
};
