import dotenv from "dotenv";
dotenv.config();

import express from "express";
import ConnectDB from "./config/db.config.ts";
import { ProductRouter } from "./routes/products.route.ts";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", function (req: express.Request, res: express.Response) {
  res.send("Welcome to TypedHome!");
  return;
});

app.use("/products", ProductRouter);

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
