const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.all("/", productController.getAllProducts);
router.all("/:sku", productController.getProductBySku);

module.exports = router;
