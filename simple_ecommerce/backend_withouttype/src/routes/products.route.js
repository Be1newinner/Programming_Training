import { Router } from "express";
import {
  AddListOfProductsController,
  AddSingleProductController,
  deleteProductByID,
  GetListOfProducts,
  GetSingleProduct,
  UpdateSingleProductController,
} from "../controllers/products.controller.js";

export const ProductRouter = Router();

ProductRouter.route("/").get(GetListOfProducts);
ProductRouter.route("/").post(AddSingleProductController);
ProductRouter.route("/").patch(UpdateSingleProductController);
ProductRouter.route("/bulk").post(AddListOfProductsController);
ProductRouter.route("/:sku").get(GetSingleProduct);
ProductRouter.route("/:sku").delete(deleteProductByID);
