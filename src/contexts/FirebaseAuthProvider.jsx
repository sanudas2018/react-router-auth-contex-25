import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const FirebaseAuthProvider = ({ children }) => {
  // * Step:-2 Observer - (State add এবং setUser করতে হবে currentUser কে, যাতে এই user সকল স্থান থেকে access পাই বা Observer করতে পারে।)
  const [user, setUser] = useState(null);

  // Step:1: context থেকে user create করা হয়েছে। এবং context এর মাধ্যমে Register.jsx এ দিয়া হয়েছে।
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Step:1: SignIn User এর function তৈরি করা হয়েছে এবং return করা হয়েছে।
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // * Step:-5 Observer - (signOut টি অ্যাড করা হয়েছে
  // ==> Password Authentication এর ভিতরেঃ signOut())
  const signOutUser = () => {
    return signOut(auth);
  };

  /**  
   * Step:-1 Observer - (onAuthStateChanged টি ব্যাবহার করতে হবে.)
  Sign in user check with observer:
  1. Use Observer inside useEffect:-
    1.1 ==> set the observer one time.
    1.2 ==> Clean up memory after unmount.
    useEffect Doc: https://react.dev/reference/react/useEffect
    // user আছে কে নাই তা check করবেঃ
    ==> onAuthStateChanged():
    https://firebase.google.com/docs/auth/web/manage-users?authuser=0
    
  */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(
      //   "Current user inside useEffect one auth state change",
      //   currentUser
      // );
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // ------------------
  // Step:2 (Context)- Provider Create and user information pass করতে হবে value এর মাধ্যমে।
  const userInfo = {
    // Step:2: send createUser with Register.jsx
    createUser,
    // Step:2 - send createUser with Login.jsx
    signInUser,
    // * Step:-3 Observer - (User এবং signOutUser টি কে Nav.jsx এ দিয়া হয়েছে।)
    user,
    signOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default FirebaseAuthProvider;
