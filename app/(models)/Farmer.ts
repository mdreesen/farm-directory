import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

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
        product: Array
    }, { timestamps: true });

const Farmer = mongoose.models.Farmers || mongoose.model("Farmers", farmerSchema);
export default Farmer;