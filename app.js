const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello elastic");
});

app.get("/new", function (req, res) {
  res.send("new hello");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
