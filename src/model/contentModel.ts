import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    type: {
        type: [String],
        required: true,
    },
    tags: {
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
export const contentModel = mongoose.model("content", contentSchema);