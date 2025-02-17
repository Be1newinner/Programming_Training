import { model, Schema } from "mongoose";


const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    mrp: { type: Number, required: true, min: 0 },
    img: { type: String, required: true },
    qty: { type: Number, required: true, min: 0 },
    sku: { type: String, required: true, unique: true },
  },
  {
    autoIndex: true,
  }
);

const UserSchema = new Schema(
  {
    items: { type: [ProductSchema], required: true },
    total: { type: Number, required: true, min: 0 },
    subtotal: { type: Number, required: true, min: 0 },
    tax: { type: Number, required: true, min: 0 },
    discount: { type: Number, required: true, min: 0 },
    uid: { type: String, required: true },
    _id: { type: String },
  },
  {
    autoIndex: true,
  }
);

export const CartModel = model("User", UserSchema);
