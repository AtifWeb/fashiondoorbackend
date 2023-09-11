const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// routers

const AuthRouter = require("./routers/Auth");
const ProductsRouter = require("./routers/Products");
const OrderRouter = require("./routers/Products");

const app = express();

// dotenv config
dotenv.config();

// using different libraries;
app.use(cors());
app.use(express.json());
// router using
app.use(AuthRouter);
app.use(ProductsRouter);
app.use(OrderRouter);

app.listen(3000, () => {
  console.log("Server Is Working Fine");
});
