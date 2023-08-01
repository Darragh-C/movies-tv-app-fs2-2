import React, { useState } from 'react';
import { Button } from '@mui/material';

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
  return (
    <div style={styles.formContainer}>
      <form style={styles.form}>
        <div style={styles.formContent}>
          <p key={"-text"} style={styles.text}>{title}</p>
          <div class="field" style={styles.input}>
            <input
              key={"email-input"}
              style={styles.input}
              type="text"
              value={"Email address"}
            />
          </div>
          <div class="field" style={styles.input}>
            <input
              key={"password-input"}
              style={styles.input}
              type="text"
              value={"Password"}
            />
          </div>
          <div class="field" style={styles.button}>
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
