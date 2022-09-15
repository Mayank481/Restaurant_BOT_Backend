const express = require("express");

const app = express();

app.use(express.json());

//Route Imports

const booktable = require("./route/bookRoute");

app.use("/api/v1", booktable);

module.exports = app;
