const mongoose = require("mongoose");
const Product = mongoose.model("product", {
  name: { type: String },
  image: { type: String },
  quantity: { type: Number },
});

module.exports = Product;
