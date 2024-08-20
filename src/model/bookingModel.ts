import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
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
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentTime: {
        type: TimeRanges,
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
export const bookingModel = mongoose.model("booking", bookingSchema);