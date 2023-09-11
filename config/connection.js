const mongoose = require("mongoose");

const databaseConnection = async () => {
  await mongoose
    .connect(process.env.URL)
    .then((response) => {
      console.log(`Connect To Database ${response.connection.name}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConnection;
