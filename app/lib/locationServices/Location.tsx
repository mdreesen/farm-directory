import { radarReverseCoordinates, radarIPCoordinates } from '@/app/lib/locationServices/radarApi';
import { ipifyAPI } from '@/app/lib/locationServices/LocationApi';
import { searchNearbyFarmers } from '@/app/lib/search/SearchNearbyFarmers';

export async function Location() {

    const success = async (position: any) => {

        const { latitude, longitude } = position?.coords;
        // const permissions = await navigator?.permissions?.query({ name: "geolocation" });
        const radarAPI = await radarReverseCoordinates(latitude, longitude)

        console.log(radarAPI);

        return radarAPI
    };

    const error = () => {
        console.log('Cannot find position...insert shrug here...');
        return 'Cannot find position'
    };

    navigator.geolocation.getCurrentPosition(success, error);
    navigator.geolocation.watchPosition(success);
};