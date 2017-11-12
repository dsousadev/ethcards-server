const express = require("express");
const app = express();
const parser = require("body-parser");
const CoinPayments = require("coinpayments");
const Database = require("./db");
const routes = require("./routes");
const wallet = require("./util/wallet.js");
const helmet = require("helmet");
const coinPayments = require("./util/coinPayments.js");

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static("client/build"));

let events = CoinPayments.events;

let middleware = [
  CoinPayments.ipn({
    merchantId: process.env.COINPAYMENTS_MERCHANT_ID,
    merchantSecret: process.env.COINPAYMENTS_MERCHANT_SECRET
  }),
  (req, res, next) => {
    // Handle via middleware
    console.log(req.body);
  }
];

app.use("/", middleware);

// Handle via instance
events.on("ipn_fail", function(data) {
  // Handle failed transaction
  console.log("IPN FAIL");
  console.log(data);
});
events.on("ipn_pending", function(data) {
  // Handle pending payment
  console.log("IPN PENDING");
  console.log(data);
});
events.on("ipn_complete", function(data) {
  // Handle completed payment
  console.log("IPN COMPLETE");
  console.log(data);
});

app.listen(3000, console.log("Listening on 3000"));

// console.log(coinPayments.createTransaction(1, "mediaskate648@gmail.com"));
