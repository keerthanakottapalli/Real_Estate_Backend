import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    propertyId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    agentId: {
        type: String,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    dateOfSale: {
        type: Date,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
    transactionDocuments: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
export const transactionModel = mongoose.model("transaction", transactionSchema);