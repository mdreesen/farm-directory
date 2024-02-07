import { radarReverseCoordinates } from "./radarApi";

export async function Location() {

    const success = async (position: any) => {
        const { latitude, longitude } = position?.coords;
        const localStorageState = localStorage.getItem("state");

        if (!localStorageState) {
            const userLocation = await radarReverseCoordinates(latitude, longitude);

            const isUserLocation = userLocation?.addresses?.find((address: any) => address);
            const { addressLabel, city, county, country, postalCode, state, street, countryCode } = isUserLocation;
            localStorage?.setItem('city', city);
            localStorage?.setItem('county', county);
            localStorage?.setItem('postalCode', postalCode);
            localStorage?.setItem('state', state);
        }
    };

    const error = () => {
        console.log('Cannot find position...insert shrug here...');
        return 'Cannot find position'
    };

    if (navigator) {
        navigator.geolocation.getCurrentPosition(success, error);
        navigator.geolocation.watchPosition(success);
    }
};