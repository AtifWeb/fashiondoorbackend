const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// routers

const AuthRouter = require("./routers/Auth");
const ProductsRouter = require("./routers/Products");
const OrderRouter = require("./routers/Orders");
const databaseConnection = require("./config/connection");

const app = express();

// dotenv config
dotenv.config();

// database connection
databaseConnection();

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
