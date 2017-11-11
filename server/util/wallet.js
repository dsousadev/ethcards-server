var db = require("../db").Wallet;
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");
var ethers = require('ethers');

const makeWallet = () => ethers.Wallet.createRandom();

const saveWallet = (privKey) => {
  // to decrypt:
  // console.log(AES.decrypt(encryptedString, process.env.E_KEY).toString(CryptoJS.enc.Utf8));

  db
    .create({p: AES.encrypt(privKey, process.env.E_KEY).toString()})
    .then(()=> {
      console.log("Saved.");
    })
    .catch(err => console.log(err));
};


module.exports = {
  saveWallet,
  makeWallet
};