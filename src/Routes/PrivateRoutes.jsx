import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

/**
 * Step:-2
 * React Router Private Route Example:
 * React Route Git Link: react-router/examples/auth/src/App.tsx
 *
 */

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  /**
   * Step:-2 (Loading)
   * Condition দিয়ে loading set করা হয়েছে।
   */
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
