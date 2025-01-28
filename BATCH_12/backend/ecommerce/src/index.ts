// products
// [GET] /products => List of products
// [GET] /products/sku => single products
// [POST] /products => Add Product
// [DELETE] /products => Delete Product
// [PUT] /products => Update Product

import express, { Application, Request, Response } from "express";
import connectDB from "./config/db.config.ts";
import productRouter from "./routes/products.route.ts";

const app: Application = express();
const PORT: number | string = process.env.PORT || 8000;

app.use(express.json());

app.get("/", function (_: Request, res: Response) {
  res.send("Welcome to TypedHome!");
  return;
});

app.use("/products", productRouter);

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
