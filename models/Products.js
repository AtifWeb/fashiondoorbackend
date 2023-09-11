const mongoose = require("mongoose");

const ProductsSchema = require("../schemas/Products.js");

const ProductsModel = mongoose.model("products", ProductsSchema);

module.exports = ProductsModel;
