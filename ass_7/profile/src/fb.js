// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRdyTjz-eSrUzzHjxOWrJkb4F4v2gCNPw",
  authDomain: "exp5react-ishika.firebaseapp.com",
  projectId: "exp5react-ishika",
  storageBucket: "exp5react-ishika.appspot.com",
  messagingSenderId: "875721859353",
  appId: "1:875721859353:web:113e181ceb5e6bc1a72588",
  measurementId: "G-JQF54F3LT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);