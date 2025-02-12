import { Request, Response } from "express";
import { ProdutModel } from "../models/products.model.ts";

export async function GetListOfProducts(req: Request, res: Response) {
  try {
    const data = await ProdutModel.find({}, "-id");

    res.status(500).send({
      error: null,
      message: "Products Fetched Success!",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error,
      message: "",
      data: null,
    });
  }
}

export async function GetSingleProducts(req: Request, res: Response) {
  try {
    const { sku } = req.params;
    const data = await ProdutModel.findOne({
      sku,
    });

    res.status(500).send({
      error: null,
      message: "Product Fetched Success!",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error,
      message: "",
      data: null,
    });
  }
}
