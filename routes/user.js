const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/getAll", async (req, res) => {
  try {
    users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/Byid/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = await User.findById({ _id: id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/add", async (req, res) => {
  try {
    user = new User(req.body);
    savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = await User.findByIdAndDelete({ _id: id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = req.body;
    updatedUser = await User.findByIdAndUpdate({ _id: id }, user);
    res.status(200).send(await User.findById({ _id: id }));
  } catch (error) {
    res.status(400).send(err);
  }
});

module.exports = router;
