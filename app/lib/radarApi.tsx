export async function radarReverseCoordinates() {
    // For the Lat and Long formatting in params:
    // latitude,longitude

    try {
        const res = await fetch('https://api.radar.io/v1/geocode/reverse?coordinates=48.1952952,-114.3080368', {
            method: "GET",
            headers: {
                'Authorization': 'prj_test_pk_8e63651fe1018faea3061e36c07f050b465922da',
                "Content-Type": "application/json"
            },
        })
        return res.json();
    } catch (error) {
        console.log(error);
        return error
    }
};