const users = require("../models/Auth.js");

const UserSignIn = async (req, res) => {
  const data = req.body;

  try {
    const UserData = await users.findOne({
      email: data.email,
      password: data.password,
    });
    res.send({ results: UserData?.email });
  } catch (err) {
    res.send({ error: err.message });
  }
};

const UserSignUp = async (req, res) => {
  try {
    const insertData = await users(req.body);

    const saveData = await insertData.save();

    res.send({ results: saveData?.email });
  } catch (err) {
    console.log(err.message);
    res.send({ error: err.message });
  }
};

const UserInformation = async (req, res) => {
  const data = req.body;

  try {
    const UserData = await users.find({
      email: data.email,
    });

    if (UserData.length > 0) {
      res.send({
        results: UserData[0],
      });
    } else {
      res.send({
        results: "No User Found",
      });
    }
  } catch (err) {
    res.send({ error: err.message });
  }
};

const UpdateProfile = async (req, res) => {
  const data = req.body;

  const filter = {
    email: data.email,
    password: data.password,
  };

  const update = {
    email: data.newEmail,
    password: data.newPassword,
    name: data.newName,
  };

  try {
    await users.findOneAndUpdate(filter, update);
    const NewData = await users.findOne(
      {
        email: data.newEmail,
      },
      { password: 0, __v: 0 }
    );
    res.send({ results: NewData });
  } catch (err) {
    res.send({ error: err.message });
  }
};

module.exports = {
  UserSignIn,
  UserSignUp,
  UserInformation,
  UpdateProfile,
};
