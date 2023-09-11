const mongoose = require("mongoose");

const OrderSchema = require("../schemas/Orders");

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;
