import React, { useState, useEffect, createContext } from "react";
import testUserCredentials from "../dataStore/testUserCredentials.json";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, password: null });

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
    } else {
      console.log("invalid credentials");
    }
    
  };

  const isAuthenticated = user.username === null ? false : true; 

  const signout = () => {
    setTimeout(() => setUser({ username: null, password: null }), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;