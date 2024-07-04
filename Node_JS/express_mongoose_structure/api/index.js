require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const studentRoutes = require("../routes/studentRoutes");
const userRoutes = require("../routes/userRoutes");
const { connectDB } = require("../config/db");

const app = express();
const port = process.env.PORT || 3000;

// Swagger options
const swaggerOptions = {
  swaggerDefinition: require("../assets/swagger.json"),
  apis: ["../routes/*.js"],
};

// Generate Swagger documentation
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve static files for custom Swagger UI styling
app.use(
  "/swagger-ui.css",
  express.static(path.join(__dirname, "../assets/swagger.css"))
);

// Swagger UI setup
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    customCssUrl: "/swagger-ui.css",
  })
);

// Middleware setup
app.use(express.json());
app.use(morgan("dev"));

// Connect to database
connectDB();

// API routes
app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
