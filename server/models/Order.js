const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        itemsOrdered: [
            {
            productId: { type: String },
            quantity: { type: Number, default: 1 }
            }
        ],
        bill: {
            type: Number,
            required: true
        },
        address: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            default: "pending"
        },
        orderDate: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model("order", orderSchema)