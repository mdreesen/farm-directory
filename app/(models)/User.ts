import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        tenant: String,
        connection: String,
        email: String,
        password: String,
        debug: Boolean,
        is_signup: Boolean,
        usePasskey: Boolean,
        email_verified: Boolean,
        isFarmer: Boolean,
        first_name: String,
        last_name: String,
        farm_name: String,
        address_road: String,
        address_city: String,
        address_state: String,
        address_zip: String,
        phone: String,
        website: String,
        facebook: String,
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;