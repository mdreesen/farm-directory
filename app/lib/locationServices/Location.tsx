import { radarReverseCoordinates } from "./radarApi";

export async function Location() {
    console.log('Getting ready')

    const success = async (position: any) => {
        const { latitude, longitude } = position?.coords;
        const localStorageLocationEnabled = localStorage.getItem("Location Enabled");

        if (!localStorageLocationEnabled) {
            const userLocation = await radarReverseCoordinates(latitude, longitude);

            const isUserLocation = userLocation?.addresses?.find((address: any) => address);
            const { addressLabel, city, county, country, postalCode, state, street, countryCode } = isUserLocation;
            localStorage?.setItem('city', city);
            localStorage?.setItem('county', county);
            localStorage?.setItem('postalCode', postalCode);
            localStorage?.setItem('state', state);
            localStorage?.setItem('Location Enabled', 'true');
        }
    };

    const error = () => {
        console.log('Cannot find position...insert shrug here...');
        localStorage?.setItem('Location Enabled', 'false');
        return 'Cannot find position'
    };

    if (navigator) {
        navigator.geolocation.getCurrentPosition(success, error);
        navigator.geolocation.watchPosition(success);
    }
};