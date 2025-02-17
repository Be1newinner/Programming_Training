import { Router } from "express";
import {
  addItemInCartController,
  clearCartController,
  getAllItemsOfCartController,
  removeItemFromCartController,
  updateItemQuantityInCartController,
} from "../controllers/carts.controller.js";

export const CartRouter = Router();

CartRouter.post("/add", addItemInCartController);
CartRouter.get("/", getAllItemsOfCartController);
CartRouter.patch("/:sku", updateItemQuantityInCartController);
CartRouter.delete("/:sku", removeItemFromCartController);
CartRouter.delete("/", clearCartController);
