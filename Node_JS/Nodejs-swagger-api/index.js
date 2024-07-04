import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import bodyParser from "body-parser";

// Import the router from the hello.js file
import postRouter from "./src/Routes/posts.js";
import helloRouter from "./src/hello.js";

// CDN CSS

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();

app.use(bodyParser.json()); // to use body object in requests
const PORT = process.env.PORT || 2001;
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "https://nodejs-swagger-api.vercel.app/",
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: ["src/**/*.js"],
};

const specs = swaggerJsDoc(options);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
);

// Here we are calling the basic html
// Use the router from the hello.js file
app.use("/", helloRouter);
// Use the router from the post.js file
app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));

// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import swaggerUI from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";

// // Import the router from the hello.js file
// import postRouter from "./src/Routes/posts.js";
// import helloRouter from "./src/hello.js";

// //? CDN CSS
// const CSS_URL =
//   "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

// const app = express();

// app.use(bodyParser.json()); // to use body object in requests
// const PORT = process.env.PORT || 2000;
// dotenv.config();

// app.use(morgan("dev"));
// app.use(cors());

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//       description: "A simple Express Library API",
//       termsOfService: "http://example.com/terms/",
//       contact: {
//         name: "API Support",
//         url: "http://www.exmaple.com/support",
//         email: "support@example.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:2000",
//         description: "My API Documentation",
//       },
//     ],
//   },
//   // This is to call all the file
//   apis: ["src/**/*.js"],
// };

// const specs = swaggerJsDoc(options);
// // app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// // custome css added!
// app.use("/public", express.static("public/swagger.css"));
// app.use(
//   "/api-docs",
//   swaggerUI.serve,
//   swaggerUI.setup(specs, { customCssUrl: "/public/swagger.css" && CSS_URL })
// );

// // Here we are calling the basic html
// // Use the router from the hello.js file

// //* All the routes goes here!
// app.use("/", helloRouter);

// // Use the router from the post.js file
// app.use("/posts", postRouter);

// //? This is for running the app
// app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
