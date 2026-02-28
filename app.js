require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const indexRouter = require('./routes/index')
const carRouter = require("./routes/carRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/", carRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;

  if (status === 404) return res.status(404).render("partials/404");
  if (status === 403) return res.status(403).render("partials/403");

  res.status(500).render("partials/500");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is Live! - listening on port ${PORT}!`);
});

