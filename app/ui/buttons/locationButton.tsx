'use client';
import styles from '@/app/styles/Navigation.module.css';
import { getLocation, userLocation } from '@/app/lib/location';

export default function LocationButton() {

    return (
        <div className={styles['link']}>
            <button id="get-location" onClick={userLocation}>
                <div >Location</div>
            </button>
        </div>
    );
};
