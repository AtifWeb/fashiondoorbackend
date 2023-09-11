const express = require("express");

const PlaceOrder = require("../controllers/Orders.js");
const router = express.Router();

router.route("/place-order").post(PlaceOrder);

module.exports = router;
