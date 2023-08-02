import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export const PrivateRoute = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate(); 

  const { component: Component, ...rest } = props;

  return context.isAuthenticated === true ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    navigate("/login")
  );
};






