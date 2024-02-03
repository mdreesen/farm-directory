import { radarReverseCoordinates } from '@/app/lib/locationServices/radarApi';

export async function Location() {
    const success = async (position: any) => {
        const { latitude, longitude } = position?.coords;
        // const permissions = await navigator?.permissions?.query({ name: "geolocation" });
        const radarAPI = await radarReverseCoordinates(latitude, longitude)

        // reqCount++ 
        // console.log('Accuracy:', accuracy);
        // console.log('Position: ', position);
        // console.log('Latitude: ', latitude);
        // console.log('Longitude', longitude);
        // console.log('Permissions Granted: ', permissions?.state === 'granted');

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