import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    propertyId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    agentId: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    review: {
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
export const reviewModel = mongoose.model("review", reviewSchema);