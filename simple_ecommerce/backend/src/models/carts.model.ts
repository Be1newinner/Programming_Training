import { Document, model, Schema } from "mongoose";

export type cartProductType = {
  title: string;
  price: number;
  mrp: number;
  img: string;
  qty: number;
  sku: string;
};

export interface CartBase extends Document {
  products: cartProductType[];
  total: number;
  subtotal: number;
  tax: number;
  discount: number;
  uid: string;
}

const ProductSchema = new Schema<cartProductType>(
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

const UserSchema = new Schema<CartBase>(
  {
    products: { type: [ProductSchema], required: true },
    total: { type: Number, required: true, min: 0 },
    subtotal: { type: Number, required: true, min: 0 },
    tax: { type: Number, required: true, min: 0 },
    discount: { type: Number, required: true, min: 0 },
    uid: { type: String, required: true },
  },
  {
    autoIndex: true,
  }
);

export const CartModel = model("User", UserSchema);
