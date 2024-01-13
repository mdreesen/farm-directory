
import { cache } from 'react'
import 'server-only'

export const preload = (id: string) => {
    void fetchFarmers();
    void fetchSingleFarmer(id);
}

export const fetchFarmers = cache(async () => {

    try {
        const res = await fetch("http://localhost:3000/api/Farmers", {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res?.json() ?? []
    } catch (error) {
        console.log(error);
        return error;
    }
});

export const fetchSingleFarmer = cache(async (id: string) => {

    try {
        const res = await fetch(`http://localhost:3000/api/Farmers/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res?.json() ?? []
    } catch (error) {
        console.log(error);
        return error;
    }
});