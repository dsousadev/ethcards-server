var router = require("express").Router();
const ipnController = require("./controllers/ipnController");

// router.get("/cards", cardController.getCards);

router.post("/ipn/", ipnController.handleIpn);

module.exports = router;