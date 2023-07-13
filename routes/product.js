const express = require("express");
const multer = require("multer");

const router = express.Router();

const Product = require("../models/product");
let fileName = "";

const myStorage = multer.diskStorage({
  destination: "./uploades/products",
  filename: (req, file, redirect) => {
    let date = Date.now();
    let fl = date + "." + file.mimetype.split("/")[1];
    redirect(null, fl);
    fileName = fl;
  },
});

const upload = multer({ storage: myStorage });

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

router.post("/add", upload.any("image"), async (req, res) => {
  try {
    product = new Product(req.body);
    product.image = fileName;
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
