const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

//only for get request
router.get("/add-product", (req, res, next) => {
  //   console.log("In another middleweare!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//only for POST request
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
