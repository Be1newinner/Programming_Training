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

ProductRouter.route("/")
  .get(GetListOfProducts)
  .post(AddSingleProductController)
  .post(AddListOfProductsController)
  .post(UpdateSingleProductController);

ProductRouter.route("/:sku").get(GetSingleProduct).delete(deleteProductByID);
