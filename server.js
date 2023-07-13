const express = require("express");
require("./config/connect");

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);

app.use("/getProductImage", express.static("./uploades/products"));

app.listen(3000, () => {
  console.log("server work !");
});


