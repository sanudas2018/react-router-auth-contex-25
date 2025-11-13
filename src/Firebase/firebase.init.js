// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsaL0uVSYFFQpN9Lrk05p1-0-nzbPuABE",
  authDomain: "react-router-auth-contex.firebaseapp.com",
  projectId: "react-router-auth-contex",
  storageBucket: "react-router-auth-contex.firebasestorage.app",
  messagingSenderId: "49031517896",
  appId: "1:49031517896:web:78fca99491adc0590ab7fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
