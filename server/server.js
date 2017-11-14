const express = require("express");
const app = express();
const parser = require("body-parser");
const Database = require("./db");
const routes = require("./routes");
const wallet = require("./util/wallet.js");
const helmet = require("helmet");
const coinPayments = require("./util/coinPayments.js");

app.use(parser.urlencoded({ extended: true }));

app.use("/", routes);
app.listen(3000, console.log("Listening on 3000"));

// console.log(coinPayments.createTransaction(1, "mediaskate648@gmail.com"));
