import React, { useState, useEffect, createContext } from "react";
import testUserCredentials from "../dataStore/testUserCredentials.json";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, password: null });
  const [redirect, setRedirect] = useState("/");

  const setRedirectDestination = (destination) => {
    setRedirect(window.location.origin + destination);
  }

  const authenticate = (email, password) => {
    console.log("email:", email);
    console.log("password:", password);
    console.log("testUserCredentials:", testUserCredentials);
    // Validate user credentials here
    const userCredentials = testUserCredentials.find((user) => user.email === email);
    console.log("userCredentials:", userCredentials);
    const validUser = userCredentials && userCredentials.password === password;
    console.log("validUser:", validUser);
  
    if (validUser) {
      setUser({ email, password });
      console.log("user authenticated");
      return true;
    } else {
      console.log("invalid credentials");
      return false;
    }
    
  };

  const isAuthenticated = user.email === null ? false : true; 

  const signout = () => {
    setTimeout(() => setUser({ email: null, password: null }), 100);
    console.log("logoutIsAuthenticated", isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
        redirect,
        setRedirectDestination,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;