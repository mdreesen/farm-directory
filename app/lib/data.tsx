import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchFarmers() {
    noStore()
    
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

export async function fetchUsers() {
    noStore()

    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleUser(id: string) {
    noStore()

    try {
        const farmer = await Farmer.findOne({ _id: id });
        return farmer
    } catch (error) {
        console.log(error)
        return error
    }
};

// export async function isLoggedIn() {
//     const cookiesList = cookies()
//     return cookiesList.has(`${process.env.COOKIE_KEY}`);
// };

export async function isFarmer(data: any) {
    console.log(data);
    return data
};