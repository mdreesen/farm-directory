'use client';
import styles from '@/app/styles/Navigation.module.css';
import { Location } from '@/app/lib/locationServices/Location';

export default function LocationButton() {

    return (
        <div className={styles['link']}>
            <button id="get-location" onClick={Location}>
                <div >Location</div>
            </button>
        </div>
    );
};
