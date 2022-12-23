const admin = require("firebase-admin");
const serviceAccount = require("./roomie-bills-firebase-adminsdk-hqj9t-7848220b56.json");
const { getFirestore } = require("firebase-admin/firestore");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyCiLd5fEf-sGRCPfcP5A40fjg0rL3RQ0wg",
  authDomain: "roomie-bills.firebaseapp.com",
  projectId: "roomie-bills",
  storageBucket: "roomie-bills.appspot.com",
  messagingSenderId: "1038927898330",
  appId: "1:1038927898330:web:e69f81fd996d61a36427e3",
  measurementId: "G-B7JLVF8MLX",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore();

module.exports = { app, db };
