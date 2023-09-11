const { collection, addDoc } = require("firebase/firestore");
const { db } = require("../config.js");

const PlaceOrder = (req, res) => {
  const body = req.body;
  console.log(body);
  addDoc(collection(db, "orders"), body)
    .then((response) => {
      console.log(response);
      res.send({ order: body });
    })
    .catch((err) => {
      res.send({ error: "Error While Ordering" });
      console.log(err);
    });
};

module.exports = PlaceOrder;
