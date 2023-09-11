const express = require("express");

const { PlaceOrder, ViewOrder } = require("../controllers/Orders.js");

const router = express.Router();

router.route("/place-order").post(PlaceOrder);
router.route("/view-order").post(ViewOrder);

module.exports = router;
