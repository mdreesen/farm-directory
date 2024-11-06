"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import User from "@/(models)/User";
import { getServerSession } from "next-auth";

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

export async function fetchFarmerDetails(id: string) {
    try {
        await connectDB();

        const farmer = await Farmer.findOne({ _id: id });

        return farmer ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleFarmerById() {
    try {
        await connectDB();
        const session = await getServerSession();

        // Find user and farmer with associated emails
        const user = await User.findOne({ email: session?.user.email });
        const farmer = await Farmer.findOne({ email: user.email });

        return farmer ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function UpdateFarmer(values: any) {
    const { id } = values;
    console.log(values)

    try {
        await connectDB();

        const farmer = await Farmer.findByIdAndUpdate(id, {
            ...values
        });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function UpdateFarmerProducts(values: any) {
    const { id, product_title, product_description, product_image, product_price, product_available, product_show } = values;

    try {
        await connectDB();

        const showingProduct = product_show === 'Show To Public' ? 'true' : 'false';

        const product = {
            product_title: product_title,
            product_description: product_description,
            product_image: product_image,
            product_price: product_price,
            product_available: product_available,
            product_show: showingProduct
        }

        const farmer = await Farmer.findOneAndUpdate({ _id: id }, { $addToSet: { products: product } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteFarmerProduct(values: any) {
    const { id } = values;
    console.log('action', id);
    try {
        await connectDB();

        const farmer = await Farmer.findOneAndUpdate(
            { 'products._id': id },
            { $pull: { products: { _id: id } } },
            { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function searchFarmers(query: any) {

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "farmerSearch",
                    "phrase": {
                        "query": query,
                        "path": ["address_state", "address_city", "address_zip", "farm_name", "first_name", "last_name", "products.product_title", "products.product_description", "products.product_available"]
                    },
                }
            }
        ]);

        return farmers;
    } catch (error) {
        console.log(error)
        return error
    }
};