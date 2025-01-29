import { Router } from "express";
import {
  AddNewProductController,
  ProductsListController,
} from "../controllers/products.controllers.ts";

const productRouter = Router();

productRouter
  .route("/")
  .get(ProductsListController)
  .post(AddNewProductController);

export default productRouter;
