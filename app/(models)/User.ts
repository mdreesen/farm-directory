import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        email: String,
        password: String,
        isFarmer: Boolean,
        isAdmin: Boolean,
        city: String,
        postalCode: String,
        state: String,
        county: String,
        latitude: String,
        longitude: String,
        agree_to_legal: Boolean,
        agree_to_privacy_policy: Boolean,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;