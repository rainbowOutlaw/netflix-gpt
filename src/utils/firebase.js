// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjFkPEP-tcAwfYhgWKEmaiMaIApC-51SI",
  authDomain: "netflixgpt-89971.firebaseapp.com",
  projectId: "netflixgpt-89971",
  storageBucket: "netflixgpt-89971.appspot.com",
  messagingSenderId: "592500507661",
  appId: "1:592500507661:web:b3eb007e622e2cdc530144",
  measurementId: "G-8C7SGNR7T7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
