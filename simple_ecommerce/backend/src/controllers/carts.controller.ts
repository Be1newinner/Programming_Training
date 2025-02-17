import { Request, Response } from "express";
import { CartModel, cartProductType } from "../models/carts.model.ts";

export async function addItemInCartController(req: Request, res: Response) {
  try {
    const {
      _id,
      items,
      uid,
    }: { _id?: string; items: cartProductType[]; uid: string } = req.body;

    const sanitizedItems = items.map(
      ({ title, price, mrp, img, qty, sku }) => ({
        title,
        price,
        mrp,
        img,
        qty,
        sku,
      })
    );

    if (sanitizedItems.length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid items in cart", data: null });
    }

    const subtotal = sanitizedItems.reduce(
      (sum, item) => sum + item.qty * item.mrp,
      0
    );
    const discount = sanitizedItems.reduce(
      (sum, item) => sum + item.qty * (item.mrp - item.price),
      0
    );
    const total = subtotal - discount;
    const tax = total * 0.18;

    if (_id) {
      const data = await CartModel.updateOne(
        { _id },
        {
          $push: { items: sanitizedItems },
          $inc: { total, subtotal, discount, tax },
        }
      );

      return res
        .status(200)
        .json({ message: "Cart updated successfully", data });
    }

    // ✅ If no cart exists, create a new cart
    const newCart = new CartModel({
      uid,
      items: sanitizedItems,
      total,
      subtotal,
      discount,
      tax,
    });

    const cart = await newCart.save();
    return res.status(201).json({ message: "Cart created successfully", cart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: (error as Error).message, data: null });
  }
}

export async function getAllItemsOfCartController(req: Request, res: Response) {
  try {
  } catch (error) {
    return void res.status(500).json({
      message: (error as Error).message,
      data: null,
    });
  }
}
export async function updateItemQuantityInCartController(
  req: Request,
  res: Response
) {
  try {
  } catch (error) {
    return void res.status(500).json({
      message: (error as Error).message,
      data: null,
    });
  }
}
export async function removeItemFromCartController(
  req: Request,
  res: Response
) {
  try {
  } catch (error) {
    return void res.status(500).json({
      message: (error as Error).message,
      data: null,
    });
  }
}
export async function clearCartController(req: Request, res: Response) {
  try {
  } catch (error) {
    return void res.status(500).json({
      message: (error as Error).message,
      data: null,
    });
  }
}
