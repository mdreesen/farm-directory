'use client';
import styles from '@/app/styles/Navigation.module.css';
import { Location } from '@/app/lib/locationServices/Location';
// import { fetchSearchingFarmerData } from '@/app/lib/farmerSearch/findNearbyFarmers';
// import { radarReverseCoordinates } from '@/app/lib/locationServices/radarApi';

export default async function LocationButton() {

    return (
        <div className={styles['link']}>
            <button id="get-location" onClick={Location}>
                <div >Location</div>
            </button>
        </div>
    );
};
