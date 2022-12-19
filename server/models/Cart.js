const mongoose = require("mongoose");

const userSchema = require("../models/User");
const itemSchema = require('../models/Item')

const cartSchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.ObjectId,
            ref: userSchema,
            required: true
        },
        addedToCart: [
            {
                type: mongoose.ObjectId,
                ref: itemSchema           
            }
        ]
    }
)

module.exports = mongoose.model("cart", cartSchema);