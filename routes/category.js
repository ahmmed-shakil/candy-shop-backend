const CreateCategory = require("../models/CreateCategory");
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");



const router = require("express").Router();

router.post("/create-category", verifyTokenAndAdmin, async (req, res) => {
    let category;
    try {
        const newCategory = req.body;
        const categories = await new CreateCategory.save();
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:category", async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category })
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;