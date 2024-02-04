// 'use server';
import styles from '@/app/styles/Navigation.module.css';
import { Location } from '@/app/lib/locationServices/Location';
import { fetchSearchingFarmerData } from '@/app/lib/farmerSearch/findNearbyFarmers';

export default async function LocationButton() {

    return (
        <div className={styles['link']}>
            <button id="get-location" onClick={fetchSearchingFarmerData}>
                <div >Location</div>
            </button>
        </div>
    );
};
