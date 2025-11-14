import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const FirebaseAuthProvider = ({ children }) => {
  // * Step:-2 Observer - (State add এবং setUser করতে হবে currentUser কে, যাতে এই user সকল স্থান থেকে access পাই বা Observer করতে পারে।)
  const [user, setUser] = useState(null);
  // Step:1 - google auth আগে সেট করতে হবেঃ
  const googleProvider = new GoogleAuthProvider();
  /**
   * Step:-1 (Loading)
   * Page Loading দিলে, বারবার login page নিয়ে যাছে এটি ঠিক করার জন্য, loading set করতে হবেঃ
   * State set করতে হবে।
   *
   */
  const [loading, setLoading] = useState(true);

  // Step:1: context থেকে user create করা হয়েছে। এবং context এর মাধ্যমে Register.jsx এ দিয়া হয়েছে।
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Step:1: SignIn User এর function তৈরি করা হয়েছে এবং return করা হয়েছে।
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Step:2 - google sign in add: Login.jsx ফাইল এ দিয়া হয়েছে।
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  Email Verification:
  const emailVerified = () => {
    setLoading(true);
    // const currentUser = user;
    return sendEmailVerification(auth.currentUser);
  };
  // * Step:-5 Observer - (signOut টি অ্যাড করা হয়েছে
  // ==> Password Authentication এর ভিতরেঃ signOut())
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Step:2 - User update
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
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
      setLoading(false);
      // এভাবে Login ঠেকান জেতে পারে তবে কিছু problem আছে।
      // const currentUserWithEmailVerified = currentUser.emailVerified;
      // if (currentUserWithEmailVerified === false) {
      //   alert("Fast Email Verified");
      // } else {
      //   setUser(currentUser);
      // }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // ----------------
  // Step:- 3 - Password Reset Email
  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

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
    loading,
    // Step:3 - google sign পাঠান হয়েছে।
    googleSingIn,
    emailVerified,
    passwordReset,
    updateUserProfile,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default FirebaseAuthProvider;
