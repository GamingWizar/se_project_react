import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}
