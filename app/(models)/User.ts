import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        email: String,
        password: String,
        isFarmer: Boolean,
        isAdmin: Boolean
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;