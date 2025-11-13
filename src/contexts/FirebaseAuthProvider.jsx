import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const FirebaseAuthProvider = ({ children }) => {
  // Step:1: context থেকে user create করা হয়েছে। এবং context এর মাধ্যমে Register.jsx এ দিয়া হয়েছে।
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Step:2 (Context)- Provider Create and user information pass করতে হবে value এর মাধ্যমে।
  const userInfo = {
    // Step:2: send createUser with Register.jsx
    createUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default FirebaseAuthProvider;
