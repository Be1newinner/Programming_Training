import { Request, Response } from "express";
import JSONResponse from "../utils/JsonResponse.ts";

export const ProductsListController = (req: Request, res: Response) => {
  try {
    const response = JSONResponse({
      status_code: 200,
      message: "Products fetched successfully!",
    });

    res.json(response);
    return;
  } catch (error: unknown) {
    console.error(error);

    const errMessage =
      error instanceof Error ? error.message : "Unknown Error!";

    const response = JSONResponse({
      status_code: 500,
      message: errMessage,
    });

    res.status(500).json(response);
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
