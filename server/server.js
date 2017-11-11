var express = require("express");
var app = express();
var parser = require("body-parser");
var Database = require("./db");
var routes = require("./routes");
var wallet = require("./util/wallet.js");
var helmet = require("helmet");

app.use(parser.json());
app.use(express.static("client/build"));
app.use("/", routes);
app.use(
  helmet.contentSecurityPolicy({
    defaultSrc: ["'self'"],
    scriptSrc: ["*.google-analytics.com"],
    styleSrc: ["'unsafe-inline'"],
    imgSrc: ["*.google-analytics.com"],
    connectSrc: ["'none'"],
    fontSrc: [],
    objectSrc: [],
    mediaSrc: [],
    frameSrc: []
  })
);
app.listen(3000, console.log("Listening on 3000"));
