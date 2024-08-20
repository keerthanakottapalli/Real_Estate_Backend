import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    propertyId: {
        type: [String],
        required: true,
    },
    userId: {
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
export const wishlistModel = mongoose.model("wishlist", wishlistSchema);