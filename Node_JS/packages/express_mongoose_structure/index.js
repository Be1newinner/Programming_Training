require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productRoutes");

const { connectDB } = require("./src/config/db");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: "*"
}));

const swaggerOptions = {
  apis: ["src/**/*.js"],
  swaggerDefinition: require("./public/swagger.json"),
  explorer: true,
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui.min.css",
    customCss: ".swagger-ui .topbar { display: none }",
  })
);

app.use(express.json());
app.use(morgan("dev"));


connectDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/enc", );

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
