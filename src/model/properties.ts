import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: [String],
        required: true,
    },
    bedrooms: {
        type: String,
        required: true,
    },
    bathrooms: {
        type: String,
        required: true,
    },
    squareFeet: {
        type: Number,
        required: true,
    },
    lotSize: {
        type: Number,
        required: true,
    },
    yearBuilt: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    images: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    listedBy: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
});
export const propertiesModel = mongoose.model("properties", propertiesSchema);