const express = require("express");

const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/home");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/favicon.ico", (req, res) => res.status(204));

// app.use("/", (req, res, next) => {
//     console.log("This alwasy run");
//   next();
// });

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000);
