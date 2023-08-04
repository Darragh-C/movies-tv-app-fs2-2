import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const PrivateRoute = (props) => {
  const context = useContext(AuthContext);
  console.log("context.user:", context.user);
  console.log("context.isAuthenticated:", context.isAuthenticated);
  props.redirect && context.setRedirectDestination(props.redirect);

  if (!context.isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (context.isAuthenticated && props.redirect) {
    return <Navigate to={`/${context.redirect}`} replace />;
  }
}
export default PrivateRoute;
