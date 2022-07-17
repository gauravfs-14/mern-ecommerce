const express = require("express");
const data = require("./data.js");
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data);
});
app.get("/api/products/:slug", (req, res) => {
  const product = data.find((x) => x.id === req.params.slug);
  if (!product) {
    res.send({ message: "Product not found" }).status(404);
  }

  res.send(product);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`app started at port ${process.env.PORT || 8080}`);
});
