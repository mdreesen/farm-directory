import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        password: String,
        isFarmer: Boolean,
        isAdmin: Boolean,
        houseNumber: String,
        street: String,
        city: String,
        postalCode: String,
        state: String,
        county: String,
        latitude: String,
        longitude: String,
        formattedAddress: String,
        favoriteFarmers: Array,
        agree_to_legal: Boolean,
        agree_to_privacy_policy: Boolean,
        image: Object,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;