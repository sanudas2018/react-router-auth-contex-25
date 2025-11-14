import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

/**
 * Step:-2
 * React Router Private Route Example:
 * React Route Git Link: react-router/examples/auth/src/App.tsx
 *
 */

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  /**
   * নিদিষ্ট link এ জাবার জন্য এবং যে route থেকে আমি ধুকতে পারি নাই সেই নিদিষ্ট route জাবার জন্য :
   * প্রথমে useLocation() এখানে করে পরে - Login.jsx এ গিয়ে useLocation এর মাধ্যমে state condition করা হয়েছে।
   */
  const location = useLocation();

  /**
   * Step:-2 (Loading)
   * Condition দিয়ে loading set করা হয়েছে।
   */
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
