const express = require("express");

const path = require("path");

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

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
