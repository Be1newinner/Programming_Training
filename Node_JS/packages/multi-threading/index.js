const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const workerId = process.pid;
  res.send(`Hello from worker ${workerId}`);
});

module.exports = app;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
