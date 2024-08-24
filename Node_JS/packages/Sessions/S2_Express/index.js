const express = require("express");
const productJSON = require("./productsData.json");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello How are you");
  res.end();
});

app.get("/products", (req, res) => {
  res.send(productJSON);
  res.end();
});

app.listen(port, () => {
  console.log("SERVER IS STARTED!");
});
