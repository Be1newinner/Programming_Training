import dotenv from "dotenv";
dotenv.config();

import express from "express";
import ConnectDB from "./config/db.config.ts";
import { ProductRouter } from "./routes/products.route.ts";

import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";
import swaggerDocs from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", function (req: express.Request, res: express.Response) {
  res.send("Welcome to TypedHome!");
  return;
});

app.use("/products", ProductRouter);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
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
