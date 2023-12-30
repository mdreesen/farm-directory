import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: false,
    },
    last_name: {
        type: String,
        required: false
    },
    farm_name: {
        type: String,
        required: false
    },
    address_road: {
        type: String,
        required: true
    },
    address_city: {
        type: String,
        required: true
    },
    address_state: {
        type: String,
        required: true
    },
    address_zip: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    website: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    product: {
        type: Array,
        required: false
    }
}, { timestamps: true });

export const Farmers = mongoose?.models?.Farmers || mongoose?.model("Farmers", farmerSchema);