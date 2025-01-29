import { Request, Response } from "express";
import JSONResponse from "../utils/JsonResponse.ts";

export const ProductsListController = (req: Request, res: Response) => {
  try {
    const response = JSONResponse({
      status_code: 200,
      message: "products fetched successfully!",
    });

    res.json(response);
    return;
  } catch (error) {
    console.log(error);
    const response = JSONResponse({
      status_code: 200,
      message: error?.message || "Unknown Error!",
    });

    res.json(response);
    return;
  }
};

export const AddNewProductController = (req: Request, res: Response) => {
  const response = JSONResponse({
    status_code: 200,
  });

  res.json(response);
  return;
};
