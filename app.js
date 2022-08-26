const express = require("express");

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));

app.use((req, res, next) => {
  console.log("In the middleweare!");
  next();
});
app.use((req, res, next) => {
  console.log("In another middleweare!");
  res.send("<h1>Hello world!</h1>");
});

app.listen(3000);
