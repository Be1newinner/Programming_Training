import { Request, Response } from "express";
import { CartBase } from "../models/carts.model.ts";

export async function addItemInCartController(req: Request, res: Response) {
  try {
    const payload: CartBase = req.body;

    const data 

  } catch (error) {
    return void res.status(500).json({
      message: (error as Error).message,
      data: null,
    });
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
