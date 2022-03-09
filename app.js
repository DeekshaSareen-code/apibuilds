const express = require("express");
const app = express();
const Route = require("./api/routes/Routes");


app.use("/recipes",Route);

module.exports = app;