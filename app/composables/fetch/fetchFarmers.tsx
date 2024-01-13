// import { fetchFarmers } from "../data";

export async function getServerSideProps() {
    // try {
    //     const res = await fetch(process.env.URL_API + "/api/Farmers");
    //     const fetchFarmers= res?.json() ?? []
    //     return fetchFarmers
    // }
    // catch (error) {
    //     console.log(error)
    //     return error
    // } finally {
    //     return { props: { fetchFarmers } }
    // }
    // Fetch data from external API
    const res = await fetch(process.env.URL_API + "/api/Farmers");
    const fetchFarmers = await res.json()
    // Pass data to the page via props
    return { props: { fetchFarmers } }

}