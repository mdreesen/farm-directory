"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";

export async function fetchFarmers() {
    try {
        await connectDB();
        const farmers = await Farmer.find()
        return farmers
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleFarmerById(id: string) {
    try {
        const farmer = await Farmer.findOne({ _id: id });
        return farmer ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function searchFarmers(query: any, user: any) {

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "farmerSearch",
                    "text": {
                        "query": query,
                        "path": ["address_zip", "address_city", "address_state"]
                    }
                }
            }
        ]);

        return farmers.filter(item => item.address_zip.includes(user.postalCode));
    } catch (error) {
        console.log(error)
        return error
    }
};