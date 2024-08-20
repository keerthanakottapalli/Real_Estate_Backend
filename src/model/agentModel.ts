import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    registeredPhoneNo: {
        type: String,
        match: /^[0-9]{10}$/,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        required: true,
    },
    realEstateName: {
        type: String,
        required: true,
    },
    realEstateLicenseNumber: {
        type: String,
        required: true,
    },
    Ratings: {
        type: String,
        required: true,
    },
    priceRange: {
        type: String,
        required: true,
    },
    sales: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
export const agentModel = mongoose.model("agent", agentSchema);