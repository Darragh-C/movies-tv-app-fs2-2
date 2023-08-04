import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from "react-router-dom";

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
  },
  form: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "10px",
    minWidth: "250px",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
  },
  input: {
    width: "100%",
    color: "gray",
  },
  label: {
    padding: 10,
    margin: "0 auto", 
  },
  button: {
    marginTop: "20px",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: "18pt"
  }
}



function authForm({ title, buttonText }) {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const context = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = context.authenticate(email, password);
    console.log("validUser", validUser);
    // console.log("context.redirect", context.redirect);
    // validUser = context.isAuthenticated;
    
    // if (validUser) {
    //   // navigate(`/${context.redirect}`);
    //   navigate("/");
    // }
  };

  return (
    <div style={styles.formContainer}>
      <form style={styles.form} onSubmit={handleLogin}>
        <div style={styles.formContent}>
          <p key={"-text"} style={styles.text}>{title}</p>
          <div style={styles.input}>
            <input
              key={"email-input"}
              style={styles.input}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.input}>
            <input
              key={"password-input"}
              style={styles.input}
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={styles.button}>
            <Button variant="contained" type="submit" sx={styles.button}>
              {buttonText}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default authForm;
