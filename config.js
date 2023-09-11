// Import the functions you need from the SDKs you need
const firebase = require("firebase/app");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRV7P38AoI0ivy2Ce6lcGFMnj2a37VlIw",
  authDomain: "donation-aa466.firebaseapp.com",
  projectId: "donation-aa466",
  storageBucket: "donation-aa466.appspot.com",
  messagingSenderId: "148678360409",
  appId: "1:148678360409:web:65a5dc5e3dbf3489816048",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  app,
};
