import Farmer from '@/app/(models)/Farmer';

export async function fetchFarmers() {
    try {
        const farmers = await Farmer.find()
        return farmers
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleFarmer(id: string) {
    try {
        const farmer = await Farmer.findOne({ _id: id });
        return farmer
    } catch (error) {
        console.log(error)
        return error
    }
};