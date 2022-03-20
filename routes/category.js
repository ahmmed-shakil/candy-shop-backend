const Product = require("../models/Product");



const router = require("express").Router();


router.get("/:category", async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category })
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;