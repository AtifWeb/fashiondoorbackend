const { Schema } = require("mongoose");

const OrderSchema = Schema({
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  order: [],
});

module.exports = OrderSchema;
