const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.get("/getAll", async (req, res) => {
  try {
    products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/Byid/:id", async (req, res) => {
  try {
    id = req.params.id;
    product = await Product.findById({ _id: id });
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/add", async (req, res) => {
  try {
    product = new Product(req.body);
    savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    id = req.params.id;
    product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    id = req.params.id;
    product = req.body;
    updatedUser = await Product.findByIdAndUpdate({ _id: id }, product);
    res.status(200).send(await Product.findById({ _id: id }));
  } catch (error) {
    res.status(400).send(err);
  }
});

module.exports = router;
