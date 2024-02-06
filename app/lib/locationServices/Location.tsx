import { radarReverseCoordinates } from "./radarApi";

export async function Location() {

    const success = async (position: any) => {
        const { latitude, longitude } = position?.coords;
        const userLocation = await radarReverseCoordinates(latitude, longitude);
        // const permissions = await navigator?.permissions?.query({ name: "geolocation" });

        const isUserLocation = userLocation?.addresses?.find((address: any) => address);
        console.log(isUserLocation);
        const { addressLabel, city, county, country, postalCode, state, street, countryCode } = isUserLocation;
        localStorage?.setItem('addressLabel', addressLabel);
        localStorage?.setItem('city', city);
        localStorage?.setItem('county', county);
        localStorage?.setItem('country', country);
        localStorage?.setItem('postalCode', postalCode);
        localStorage?.setItem('state', state);
        localStorage?.setItem('street', street);
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