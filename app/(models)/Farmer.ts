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
        product_one: String,
        product_one_description: String,
        product_one_feed: String,
        product_one_available: Boolean,
        product_one_show: Boolean,
        product_two: String,
        product_two_description: String,
        product_two_feed: String,
        product_two_available: Boolean,
        product_two_show: Boolean,
        product_three: String,
        product_three_description: String,
        product_three_feed: String,
        product_three_available: Boolean,
        product_three_show: Boolean
    }, { timestamps: true });

const Farmer = mongoose.models.Farmers || mongoose.model("Farmers", farmerSchema);
export default Farmer;