import { model, Schema } from "mongoose";

export type productType = {
  name: string;
  category: string;
  price: number;
  mrp: number;
  stock: number;
  sku: string;
  rating: number;
  description: string;
};

const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  mrp: Number,
  stock: Number,
  sku: String,
  rating: Number,
  description: String,
});

export const ProductModel = model("Product", productSchema);
