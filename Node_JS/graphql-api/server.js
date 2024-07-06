const express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema");
const connectDB = require("./db");

const app = express();

connectDB();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
