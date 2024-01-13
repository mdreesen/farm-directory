export async function isUser() {
    'use server';

    try {
        const res = await fetch(process.env.URL_API + `/api/Users`);
        return res?.json() ?? []
    }
    catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchFarmers() {
    'use server';

    try {
        const res = await fetch(process.env.URL_API + "/api/Farmers", {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res?.json() ?? []
    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function fetchSingleFarmer(id: string) {
    'use server';

    try {
        const res = await fetch(process.env.URL_API + `/api/Farmers/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res?.json() ?? []
    } catch (error) {
        console.log(error);
        return error;
    }
};
