
export async function isUser() {
    try {
        const res = await fetch(process.env.LOCAL_URL + `/api/Users`);
        return res?.json()
    }
    catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchFarmers() {
    try {
        const res = await fetch(process.env.LOCAL_URL + "/api/Farmers");
        return res?.json()
    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function fetchSingleFarmer(id: string) {
    try {
        const res = await fetch(process.env.LOCAL_URL + `/api/Farmers/${id}`);
        return res?.json()
    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function filterFarmer(farmer: any) {
    return farmer
};

export async function farmer(data: any) {
    const eachFarmer = data?.farmerData
    const farmerObj = Object.entries(eachFarmer).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
    console.log(farmerObj)
    const socialLinks = {
        facebook: eachFarmer?.facebook,
        instagram: eachFarmer?.instagram
    };



    return [
        socialLinks
    ];
}
