import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    propertyId: {
        type: [String],
        required: true,
    },
    fromUserId: {
        type: String,
        required: true,
    },
    toUserId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    attachments: {
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
export const chatModel = mongoose.model("chat", chatSchema);