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
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;