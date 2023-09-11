const { Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
UserSchema.plugin(uniqueValidator);
module.exports = UserSchema;
