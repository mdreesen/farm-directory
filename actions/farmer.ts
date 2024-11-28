"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import User from "@/(models)/User";
import { getServerSession } from "next-auth";
import { radarForwardCoordinates, radarReverseCoordinates } from "@/lib/radarApi";
import { revalidatePath } from 'next/cache';

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
    const { id, address_road, address_city, address_state, address_zip } = values;

    const farmerLocation = {
        road: address_road,
        city: address_city,
        state: address_state,
        postalCode: address_zip
    };

    const radarServices = await radarForwardCoordinates(farmerLocation);
    const address = radarServices.addresses.find((address: any) => address);

    try {
        await connectDB();

        const farmer = await Farmer.findByIdAndUpdate(id, {
            ...values,
            ...address
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

export async function UpdateFarmerProduct(values: any) {
    const { productId, product_title, product_description, product_image, product_price, product_available, product_show } = values;
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

        const farmer = await Farmer.findOneAndUpdate(
            { 'products._id': productId },
            { $set: { 'products.$': { ...product } } },
            { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteFarmerProduct(values: any) {
    const { id } = values;

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

export async function deleteFarmer() {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.deleteOne({ email: session?.user.email });
        const farmer = await Farmer.deleteOne({ email: session?.user.email });

        revalidatePath('/');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function searchFarmers({ category, searchParams }: any) {
    const { city, state, zip_code } = searchParams;
    const session = await getServerSession();
    const sessionUser = session?.user

    const user = await User.findOne({ email: sessionUser?.email });
    const userFilters = user.filters;
    const location = { latitude: userFilters?.latitude, longitude: userFilters?.longitude };

    const radarServices = await radarReverseCoordinates(location);
    const findLocation = radarServices?.addresses?.find((item: any) => item) ?? [];

    try {
        const farmers = await Farmer.aggregate([
            {
                $search: {
                    "index": "farmerSearch",
                    "phrase": {
                        "query": category,
                        "path": ["address_state", "address_city", "address_zip", "farm_name", "first_name", "last_name", "products.product_title", "products.product_description", "products.product_available"]
                    },
                }
            }
        ]);

        const filtering = farmers.filter((item, index) => {
            return item.address_city === city || item.address_state === state || item.address_zip === zip_code;
        });

        const filteringCurrentLocation = farmers.filter((item, index) => {
            return findLocation.city === item.address_city || findLocation.state === item.address_state || findLocation.postalCode === item.address_zip;
        });

        switch (true) {
            case userFilters?.use_my_location:
                return filteringCurrentLocation
                break;
            default:
                return filtering.length > 0 ? filtering : farmers
        }
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchFarmersCoordinates() {

    try {
        const farmers = await Farmer.find();

        let farmerCoordinates = [] as any;

        farmers.map((item: any) => {
            const { latitude, longitude } = item;

            const lat = Number(latitude);
            const lng = Number(longitude)

            if (latitude && longitude) return farmerCoordinates.push({ lat: lat, lng: lng });
        });

        return farmerCoordinates
    } catch (error) {
        console.log(error)
        return error
    }
};