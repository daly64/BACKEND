const mongoose = require("mongoose");
const User = mongoose.model("user", {
  name: { type: String },
  password: { type: String },
  age: { type: Number },
});

module.exports = User;
