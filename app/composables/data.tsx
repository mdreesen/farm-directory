
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
    } catch(error) {
        console.log(error);
        return error;
    }
};

export async function filterFarmer(farmer: any) {
    return farmer
}
