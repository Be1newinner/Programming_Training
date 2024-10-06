const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.all("/:sku", productController.getProductBySku);

module.exports = router;
