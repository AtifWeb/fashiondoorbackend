const express = require("express");

const Products = require("../controllers/Products.js");
const router = express.Router();

router.route("/get-products").post(Products);

module.exports = router;
