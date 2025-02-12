import { Router } from "express";
import {
  GetListOfProducts,
  GetSingleProducts,
} from "../controllers/products.controller.ts";

export const ProductRouter = Router();

ProductRouter.route("/").get(GetListOfProducts);
ProductRouter.route("/:sku").get(GetSingleProducts);
