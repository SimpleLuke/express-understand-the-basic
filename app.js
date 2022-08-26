const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleweare!");
  next();
});
app.use((req, res, next) => {
  console.log("In another middleweare!");
  res.send("<h1>Hello world!</h1>");
});

const server = http.createServer(app);

server.listen(3000);
