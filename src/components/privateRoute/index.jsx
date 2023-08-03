import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const PrivateRoute = ({ path, ...props }) => {
  const context = useContext(AuthContext);

  return context.isAuthenticated === true ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
