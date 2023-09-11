const mongoose = require("mongoose");

const schema = require("../schemas/Auth.js");

const users = mongoose.model("users", schema);

module.exports = users;
