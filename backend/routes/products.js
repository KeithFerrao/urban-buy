const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Product = require("../models/product");


//Route 1 : To get all the products
router.get("/getAllProducts", async (req, res) => {
  try {
    // To fetch all the products
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Route 2 : To add new products 
router.post(
  "/addProducts",
  [
    body("name").notEmpty().withMessage("Name cannot be empty"),
    body("description").notEmpty().withMessage("Description cannot be empty"),
    body("price").notEmpty().withMessage("Price cannot be empty"),
    body("image").notEmpty().withMessage("Image cannot be empty"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, description, price, image } = req.body;

      //Creating instance of the product 
      let product = await new Product({
        name,
        description,
        price,
        image,
      });

      // Saving the product in the Database
      await product.save();
      res.json({ success: "Product stored successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
