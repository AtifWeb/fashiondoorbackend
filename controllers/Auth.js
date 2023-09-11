const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
} = require("../config.js");
const {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} = require("firebase/firestore");

const UserSignIn = (req, res) => {
  const data = req.body;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      res.send({ results: user["email"] });
    })
    .catch((error) => {
      res.send({
        results: {
          error: "Error While Sign In",
        },
      });
    });
};

const UserSignUp = (req, res) => {
  const data = req.body;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;

      const docRef = await addDoc(collection(db, "users"), {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      res.send({ results: user["email"] });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        results: {
          error: "Error While Sign Up",
        },
      });
    });
};

const UserInformation = async (req, res) => {
  const body = req.body;
  const q = query(collection(db, "users"), where("email", "==", body.email));

  const querySnapshot = await getDocs(q);

  const dataForm = [];

  querySnapshot.forEach((doc) => {
    dataForm.push(doc.data());
  });

  if (dataForm.length > 0) {
    res.send({ user: dataForm[0] });
  } else {
    res.send({ user: "Not Available" });
  }
};

const UpdateProfile = async (req, res) => {
  const data = req.body;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      // Signed in

      const q = query(
        collection(db, "users"),
        where("email", "==", data.email)
      );

      const querySnapshot = await getDocs(q);

      const dataId = [];

      querySnapshot.forEach((doc) => {
        dataId.push(doc.id);
      });

      // dataId

      // const Document = doc(db, "users", dataId[0]);

      // await updateDoc(Document, {
      //   name: data.name,
      //   email: data.newEmail,
      //   password: data.newpassword,
      // });

      const user = userCredential.user;
      // console.log(user);
      // await user.updateEmail(data.newEmail);
      // await user.updatePassword(data.newpassword);

      res.send({ results: "Profile Updated Successfully" });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        results: {
          error: "Error While Updating Profile",
        },
      });
    });
};

module.exports = {
  UserSignIn,
  UserSignUp,
  UserInformation,
  UpdateProfile,
};
