require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const studentRoutes = require("./src/routes/studentRoutes");
const userRoutes = require("./src/routes/userRoutes");
const { connectDB } = require("./src/config/db");

const app = express();
const port = process.env.PORT || 3000;

const swaggerOptions = {
  apis: ["src/**/*.js"],
  swaggerDefinition: require("./public/swagger.json"),
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

connectDB();

app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
