import React, { useState } from 'react';
import { Button } from '@mui/material';

const styles = {
  form: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "10px",
    width: "25%", 
    minWidth: "250px",
    margin: "0 auto", 
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
  },
  input: {
    width: "100%",
    minWidth: "150px",
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
  );
}

export default authForm;