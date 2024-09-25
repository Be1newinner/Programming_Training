const express = require("express");
const fs = require("fs");
const https = require("https");
const productJSON = require("./productsData.json");

const app = express();

// Replace these paths with the actual paths to your SSL certificate and private key files
const options = {
  key: fs.readFileSync("./private.key"),
  cert: fs.readFileSync("./certificate.crt"),
};

const port = 30961; ; // HTTPS typically uses port 443

app.get("/", (req, res) => {
  res.send("Hello How are you");
  res.end();
});

app.get("/products", (req, res) => {
  res.send(productJSON);
  console.log("request at product", req);
  res.end();
});

// Create the HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`HTTPS SERVER IS STARTED ON PORT ${port}`);
});

// Optionally, redirect HTTP requests to HTTPS
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(301, { Location: "https://" + req.headers.host + req.url });
    res.end();
  })
  .listen(80, () => {
    console.log("HTTP server is redirecting to HTTPS");
  });
