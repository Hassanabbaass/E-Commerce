const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        dateAdded: {
            type: Date,
            default: Date.now
        },
    }
)

module.exports = mongoose.model("item", itemSchema)