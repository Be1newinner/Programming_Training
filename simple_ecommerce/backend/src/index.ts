import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";

import ConnectDB from "./config/db.config.ts";

import { ProductRouter } from "./routes/products.route.ts";
import { AuthRouter } from "./routes/users.route.ts";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.get("/", function (req: express.Request, res: express.Response) {
  res.send("Welcome to TypedHome!");
  return;
});

app.use("/products", ProductRouter);
app.use("/auth", AuthRouter);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Simple Ecommerce",
      version: "0.1.0",
      description: "Simple Ecommerce Docs for Students to train them!",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Vijay Kumar",
        email: "be1newinner@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerDocs(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

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
