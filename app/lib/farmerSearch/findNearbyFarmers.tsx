'use server'
import Farmer from '@/app/(models)/Farmer';
import { unstable_noStore as noStore } from 'next/cache';
import { radarForwardCoordinates, radarIPCoordinates } from '@/app/lib/locationServices/radarApi';


export async function fetchSearchingFarmerData() {
    noStore();

    const userIPLocation = await radarIPCoordinates();
    const parseUserIPLocation = await JSON.parse(JSON.stringify(userIPLocation));
    // const isUserLocation = userLocation?.addresses.find((address: any) => address);
    // console.log('lkjsdflkjsdflkjsdf', isUserLocation);
    // console.log('USER IP LOCATION HERE', parseUserIPLocation)

    try {
        const farmers = await Farmer.find();
        // console.log('farmers', farmers)
        const fetchNearbyFarmers = farmers?.filter((item) => {
            switch (true) {

                case item?.address_state === parseUserIPLocation?.state:
                    return item;
                    break

                default:
                    return farmers
            }
        });
        console.log(fetchNearbyFarmers);

        return fetchNearbyFarmers;
    } catch (error) {
        console.log(error)
        return error
    }

}

