import dotenv from "dotenv";
dotenv.config();

import express from "express";

import ConnectDB from "./config/db.config.js";

import { ProductRouter } from "./routes/products.route.js";
import { AuthRouter } from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to TypedHome!");
  return;
});

app.use("/products", ProductRouter);
app.use("/auth", AuthRouter);

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
