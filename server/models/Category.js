const mongoose = require("mongoose");

const itemSchema = require("./Item");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        items: [
            {
            type: mongoose.ObjectId,
            ref: itemSchema
            }
        ]   
    }
)

module.exports = mongoose.model('category', categorySchema)