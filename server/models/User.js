const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a username"],
            unique: true
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
            validate: [isEmail, "Please enter a valid email"]
        },
        password: {
            type: String,
            required: [true, "please enter a password"],

        },
        isAdmin: {
            type: Boolean,
            default: false 
        },
        registrationDate: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model("user", userSchema);