
const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: Buffer,
        required: true
    }
})

module.exports = mongoose.model("createCategory", CategorySchema)