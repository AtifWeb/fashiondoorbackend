const ProductsModel = require("../models/Products.js");

const Products = async (req, res) => {
  const body = req.body;

  try {
    const products = await ProductsModel.find({
      type: body.type,
    });
    res.send({ products: products });
  } catch (err) {
    res.send({ error: err.message });
  }
};

module.exports = Products;
