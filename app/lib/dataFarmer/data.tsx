import Farmer from '@/app/(models)/Farmer';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchFarmers() {
    noStore();

    try {
        const farmers = await Farmer.find()
        return farmers
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleFarmer(id: string) {
    noStore()

    try {
        const farmer = await Farmer.findOne({ _id: id });
        return farmer
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleFarmerByEmail(email: string) {
    noStore()

    try {
        const farmer = await Farmer.findOne({ email: email });
        return farmer ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function updateSingleFarmerByEmail(email: string) {
    noStore()

    try {
        const farmer = await Farmer.findOne({ email: email });
        return farmer ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function isFarmer(data: any) {
    console.log(data);
    return data
};

export async function fetchFarmersCoordinates() {
    noStore();

    try {
        const farmers = await Farmer.find();

        let farmerCoordinates = [] as any;

        farmers.map((item: any) => {
            const { latitude, longitude } = item;

            const lat = Number(latitude);
            const lng = Number(longitude)

            if (latitude && longitude) return farmerCoordinates.push({ lat: lat, lng: lng }); 
          });

        return farmerCoordinates
    } catch (error) {
        console.log(error)
        return error
    }
};