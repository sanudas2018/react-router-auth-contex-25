import React from "react";
import { AuthContext } from "./AuthContext";

const FirebaseAuthProvider = ({ children }) => {
  // Step:2 (Context)- Provider Create and user information pass করতে হবে value এর মাধ্যমে।
  const userInfo = {
    name: "Promita",
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default FirebaseAuthProvider;
