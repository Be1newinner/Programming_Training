import { Request, Response } from "express";
import { productType, ProductModel } from "../models/products.model.ts";

// Fetch All Products
export async function GetListOfProducts(req: Request, res: Response) {
  try {
    const data = await ProductModel.find({}, "-_id").lean();
    res.status(200).json({
      error: null,
      message: "Products fetched successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: "Failed to fetch products",
      data: null,
    });
  }
}

// Fetch Single Product by SKU
export async function GetSingleProduct(req: Request, res: Response) {
  try {
    const { sku } = req.params;
    const data = await ProductModel.findOne({ sku }).lean();

    if (!data) {
      res.status(404).json({
        error: "Product not found",
        message: "",
        data: null,
      });
      return; //Intentionaly we are not retruning res instead empty return;
    }

    res.status(200).json({
      error: null,
      message: "Product fetched successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: "Failed to fetch product",
      data: null,
    });
  }
}

// Add Multiple Products
export async function AddListOfProductsController(req: Request, res: Response) {
  try {
    const body = req.body as productType[];

    if (!Array.isArray(body) || body.length === 0) {
      res.status(400).json({
        error: "Invalid input",
        message: "Product list is required",
        data: null,
      });
      return; //Intentionaly we are not retruning res instead empty return;
    }

    const data = await ProductModel.insertMany(body);

    res.status(201).json({
      error: null,
      message: "Products added successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: "Failed to add products",
      data: null,
    });
  }
}

// Add Single Product
export async function AddSingleProductController(req: Request, res: Response) {
  try {
    const { name, category, price, mrp, stock, sku, description } =
      req.body as productType;

    if (!name || !category || !price || !mrp || !stock || !sku) {
      res.status(400).json({
        error: "Missing required fields",
        message: "Please provide all required details",
        data: null,
      });
      return; //Intentionaly we are not retruning res instead empty return;
    }

    const product = new ProductModel({
      name,
      category,
      price,
      mrp,
      stock,
      sku,
      rating: 0,
      description,
    });

    const data = await product.save();

    res.status(201).json({
      error: null,
      message: "Product added successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: "Failed to add product",
      data: null,
    });
  }
}

// Update Single Product by SKU
export async function UpdateSingleProductController(
  req: Request,
  res: Response
) {
  try {
    const { name, category, price, mrp, stock, sku, description, rating } =
      req.body as productType;

    const updatedData = await ProductModel.findOneAndUpdate(
      { sku },
      { name, category, price, mrp, stock, description, rating },
      { new: true }
    );

    if (!updatedData) {
      res.status(404).json({
        error: "Product not found",
        message: "No product found with the given SKU",
        data: null,
      });
      return; //Intentionaly we are not retruning res instead empty return;
    }

    res.status(200).json({
      error: null,
      message: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: "Failed to update product",
      data: null,
    });
  }
}

// Delete Product by SKU
export async function deleteProductByID(req: Request, res: Response) {
  try {
    const { sku } = req.params;

    const deletedProduct = await ProductModel.findOneAndDelete({ sku });

    if (!deletedProduct) {
      res.status(404).json({
        error: "Product not found",
        message: "No product found with the given SKU",
        data: null,
      });
      return; //Intentionaly we are not retruning res instead empty return;
    }

    res.status(204).send(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: "Failed to delete product",
      data: null,
    });
  }
}
