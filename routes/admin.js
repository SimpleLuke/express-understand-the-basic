const express = require("express");

const router = express.Router();

//only for get request
router.get("/add-product", (req, res, next) => {
  //   console.log("In another middleweare!");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});

//only for POST request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
