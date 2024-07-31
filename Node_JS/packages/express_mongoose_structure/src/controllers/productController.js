const Product = require("../models/Product");

// Get all products with pagination
exports.getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.find({})
      .select("title imageURL sku price mrp type")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Product.countDocuments();

    res.json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single product by SKU
exports.getProductBySku = async (req, res) => {
  try {
    const product = await Product.findOne({ sku: req.params.sku });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
