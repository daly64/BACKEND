const express = require("express");
require("./config/connect");

const app = express();

const User = require("./models/user");
app.use(express.json());

app.listen(3000, () => {
  console.log("server work !");
});

app.get("/getAll", async (req, res) => {
  try {
    users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.get("/Byid/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = await User.findById({ _id: id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/add", async (req, res) => {
  try {
    user = new User(req.body);
    savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = await User.findByIdAndDelete({ _id: id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.put("/update/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = req.body;
    updatedUser = await User.findByIdAndUpdate({ _id: id }, user);
    res.status(200).send(await User.findById({ _id: id }));
  } catch (error) {
    res.status(400).send(err);
  }
});