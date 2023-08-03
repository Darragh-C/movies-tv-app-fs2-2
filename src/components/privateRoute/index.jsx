import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  console.log("context.user:", context.user);
  console.log("context.isAuthenticated:", context.isAuthenticated);

  return context.isAuthenticated === true ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
