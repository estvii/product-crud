const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// JS template engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use(require("./routes"));

module.exports = app;