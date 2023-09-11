const express = require("express");
const Auth = require("../controllers/Auth");

const router = express.Router();

// routing now

router.route("/sign-in").post(Auth.UserSignIn);
router.route("/sign-up").post(Auth.UserSignUp);
router.route("/user-info").post(Auth.UserInformation);
// router.route("/update-profile").post(Auth.UpdateProfile);

module.exports = router;
