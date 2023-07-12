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
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});
app.get("/Byid/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = await User.findById({ _id: id });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

app.post("/add", async (req, res) => {
  try {
    user = new User(req.body);
    savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = await User.findByIdAndDelete({ _id: id });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});
app.put("/update/:id", async (req, res) => {
  try {
    id = req.params.id;
    user = req.body;
    updatedUser = await User.findByIdAndUpdate({ _id: id }, user);
    res.send(await User.findById({ _id: id }));
  } catch (error) {
    res.send(err);
  }
});