const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/", (req, res, next) => {
  //   console.log("This alwasy run");
  next();
});

app.use("/add-product", (req, res, next) => {
  //   console.log("In another middleweare!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  //   console.log("In another middleweare!");
  res.send("<h1>Hello world!</h1>");
});

app.listen(3000);
