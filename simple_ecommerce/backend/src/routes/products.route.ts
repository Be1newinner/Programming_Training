import { Router } from "express";
import {
  AddListOfProductsController,
  AddSingleProductController,
  deleteProductByID,
  GetListOfProducts,
  GetSingleProduct,
  UpdateSingleProductController,
} from "../controllers/products.controller.ts";

export const ProductRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - price
 *         - mrp
 *         - stock
 *         - sku
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product
 *         name:
 *           type: string
 *           description: Name of the product
 *         category:
 *           type: string
 *           description: Category of the product
 *         price:
 *           type: number
 *           description: Selling price of the product
 *         mrp:
 *           type: number
 *           description: Maximum retail price
 *         stock:
 *           type: number
 *           description: Available stock count
 *         sku:
 *           type: string
 *           description: Unique SKU identifier
 *       example:
 *         id: "6123456789abcdef01234567"
 *         name: "iPhone 14"
 *         category: "Electronics"
 *         price: 999
 *         mrp: 1099
 *         stock: 20
 *         sku: "IPH14-256GB"
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     description: Retrieve a list of all available products
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
ProductRouter.route("/").get(GetListOfProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Add a single product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Missing required fields
 */
ProductRouter.route("/").post(AddSingleProductController);

/**
 * @swagger
 * /api/products:
 *   patch:
 *     summary: Update a product by SKU
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */
ProductRouter.route("/").patch(UpdateSingleProductController);

/**
 * @swagger
 * /api/products/bulk:
 *   post:
 *     summary: Add multiple products at once
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Products added successfully
 *       400:
 *         description: Invalid input data
 */
ProductRouter.route("/bulk").post(AddListOfProductsController);

/**
 * @swagger
 * /api/products/{sku}:
 *   get:
 *     summary: Get a product by SKU
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: sku
 *         required: true
 *         schema:
 *           type: string
 *         description: The SKU of the product
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
ProductRouter.route("/:sku").get(GetSingleProduct);

/**
 * @swagger
 * /api/products/{sku}:
 *   delete:
 *     summary: Delete a product by SKU
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: sku
 *         required: true
 *         schema:
 *           type: string
 *         description: The SKU of the product
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
ProductRouter.route("/:sku").delete(deleteProductByID);
