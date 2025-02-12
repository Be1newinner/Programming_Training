import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  currency: String,
  stock: Number,
  sku: Number,
  rating: Number,
});

export const ProdutModel = model("Product", productSchema);
