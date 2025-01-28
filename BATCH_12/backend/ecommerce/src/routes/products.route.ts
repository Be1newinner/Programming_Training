import { Request, Router, Response } from "express";

const productRouter = Router();

productRouter
  .route("/")
  .get((req: Request, res: Response) => {})
  .post((req: Request, res: Response) => {});

productRouter
  .route("/:sku")
  .get((req: Request, res: Response) => {})
  .put((req: Request, res: Response) => {})
  .delete((req: Request, res: Response) => {});

export default productRouter;
