// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthstateChange } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebase } from "@react-native-firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMR81QrbbNSoUV6Wp2kgg9AeMo6GxKuWY",
  authDomain: "ict-u-bus.firebaseapp.com",
  databaseURL: "https://ict-u-bus-default-rtdb.firebaseio.com",
  projectId: "ict-u-bus",
  storageBucket: "ict-u-bus.appspot.com",
  messagingSenderId: "15507297534",
  appId: "1:15507297534:web:b0d7bbb702ea67b266c1af",
  measurementId: "G-LE1D56Q4RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// initialize google authentication
export const provider = new GoogleAuthProvider();


// initialize email authentication
export const auth = getAuth(app);


// initialize the database
const firestore = getFirestore(app);

export default firestore; app;


