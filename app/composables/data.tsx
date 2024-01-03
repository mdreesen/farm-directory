
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
