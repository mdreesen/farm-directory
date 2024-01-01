import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const productSchema = new Schema(
    {
        product_name: String,
        product_description: String,
        product_feed: String,
        available: Boolean,
        show_product: Boolean
    }, { timestamps: true });

const farmerSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        farm_name: String,
        address_road: String,
        address_city: String,
        address_state: String,
        address_zip: String,
        phone: String,
        email: String,
        website: String,
        facebook: String,
        products: [productSchema]
    }, { timestamps: true });

const Farmer = mongoose.models.Farmers || mongoose.model("Farmers", farmerSchema);
export default Farmer;