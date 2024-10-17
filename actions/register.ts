"use server"
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import Farmer from "@/(models)/Farmer";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password, confirm_password, name, privacy_policy, isFarmer } = values;
    try {
        await connectDB();
        const userFound = await User.findOne({ email });
console.log('isFarmer', isFarmer)
        if (confirm_password !== password) {
            return {
                error: 'Passwords do not match'
            }
        }
        if (userFound) {
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            isFarmer,
            agree_to_privacy_policy: true
        });

        const savedUser = await user.save();

        if (isFarmer) {
            await Farmer.create({ email, name, password, agree_to_privacy_policy: true });
        };

    } catch (e) {
        console.log(e);
    }
}