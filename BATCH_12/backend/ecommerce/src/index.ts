import express from "express";
import connectDB from "./config/db.ts";
import productRouter from "./routes/products.routes.ts";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", function (req: express.Request, res: express.Response) {
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
