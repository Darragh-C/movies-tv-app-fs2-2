import React, { useState, useEffect, createContext } from "react";
import testUserCredentials from "../dataStore/testUserCredentials.json";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ props }) => {
  const [user, setUser] = useState({ username: null, password: null });

  const authenticate = (email, password) => {
    // Validate user credentials here
    const userCredentials = testUserCredentials.filter((user) => user.email === email);
    const validUser = userCredentials && userCredentials.password === password;
  
    if (validUser) {
      setUser({ email, password });
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
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;