const { collection, query, where, getDocs } = require("firebase/firestore");
const { db } = require("../config.js");

const Products = async (req, res) => {
  const body = req.body;
  const q = query(collection(db, "products"), where("type", "==", body.type));

  const querySnapshot = await getDocs(q);

  const dataForm = [];

  querySnapshot.forEach((doc) => {
    dataForm.push(doc.data());
  });
  res.send({ products: dataForm });
};

module.exports = Products;
