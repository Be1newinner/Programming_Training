const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to get all products with pagination
router.get("/", productController.getAllProducts);

// Route to get single product by SKU
router.get("/:sku", productController.getProductBySku);

module.exports = router;
