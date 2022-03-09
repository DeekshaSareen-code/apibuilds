const express = require("express");
const app = express();
const route = require("./routes.js")



app.use("/recipes", route);

module.exports = app;