const Order = require("../models/Order.js");
const PlaceOrder = async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    const dataOrder = await Order(body);

    const dataSave = await dataOrder.save();

    res.send({ order: dataSave });
  } catch (err) {
    console.log(err);
    res.send({ error: err.message });
  }
};

const ViewOrder = async (req, res) => {
  const body = req.body;

  try {
    const dataOrder = await Order.find({
      email: body.email,
    });

    res.send({ results: dataOrder });
  } catch (err) {
    res.send({ error: err.message });
  }
};

module.exports = { PlaceOrder, ViewOrder };
