const express = require("express");
const data = require("./data.js");
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`app started at port ${process.env.PORT || 8080}`);
});
