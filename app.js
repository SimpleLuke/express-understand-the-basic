const express = require("express");

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/", (req, res, next) => {
  console.log("This alwasy run");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleweare!");
  res.send("<h1>Add Product Page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In another middleweare!");
  res.send("<h1>Hello world!</h1>");
});

app.listen(3000);
