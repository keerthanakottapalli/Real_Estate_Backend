import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    status: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
export const inquiryModel = mongoose.model("inquiry", inquirySchema);