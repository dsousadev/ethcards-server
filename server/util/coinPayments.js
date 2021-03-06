var Coinpayments = require('coinpayments');
var client = new Coinpayments({
    key: process.env.COIN_PUB,
    secret: process.env.COIN_PRIV,
}); 

createTransaction = (amount, buyerEmail) => {
    const options = {
        amount,
        currency1: "USD",
        currency2: "ETH",
        buyer_email: buyerEmail,
        ipn_url: process.env.SERVER_URL
    }
    client.createTransaction(options, (err, res) => {
        console.log(res);
    })
}

module.exports = {
    createTransaction
};