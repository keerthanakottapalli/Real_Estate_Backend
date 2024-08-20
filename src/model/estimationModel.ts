import mongoose from "mongoose";

const estimationSchema = new mongoose.Schema({
    propertyId: {
        type: String,
        required: true,
    },
    estimationValue: {
        type: String,
        required: true,
    },
    valuationDate: {
        type: Date,
        required: true,
    },
    valuationReport: {
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
export const estimationModel = mongoose.model("estimation", estimationSchema);