const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        categories: {
            type: String
        },
        desc1: {
            type: String,
            required: true
        },
        desc2: {
            type: String,
            required: true
        },
        desc3: {
            type: String,
            required: true
        },
        img1: {
            type: String,
            required: true
        },
        img2: {
            type: String,
            required: true
        },
        img3: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema);