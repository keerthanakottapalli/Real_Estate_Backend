import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    type: {
        type: [String],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date
    }
});
export const notificationModel = mongoose.model("notifications", notificationSchema);