import React, { useState, useEffect, createContext } from "react";
import testUserCredentials from "../dataStore/testUserCredentials.json";
import fakeAuth from "../fakeAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const authenticate = async (email, password) => {
    console.log("email:", email);
    console.log("password:", password);
    
    const userCredentials = testUserCredentials.find((user) => user.email === email);
    console.log("userCredentials:", userCredentials);
    const validUser = userCredentials && userCredentials.password === password;
    console.log("validUser:", validUser);
  
    if (validUser) {
      const token = await fakeAuth(email, password);
      setToken(token);
      const origin = location.state?.intent?.pathname || "/";
      navigate(origin);
      // return true;
    } else {
      console.log("invalid credentials");
      // return false;
    }
  };

  // const isAuthenticated = user.email === null ? false : true; 

  const signout = () => {
    setToken(null);
    navigate('/')
  };

  return (
    <AuthContext.Provider
      value={{
        authenticate,
        signout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;