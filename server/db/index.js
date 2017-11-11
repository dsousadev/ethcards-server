require("dotenv").load();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongo connected");
});

const walletSchema = new mongoose.Schema({
  p: String
});

const Wallet = db.model("W", walletSchema);

module.exports = {
  db,
  Wallet
};