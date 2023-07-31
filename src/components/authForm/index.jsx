import React, { useState } from 'react';
import { Button } from '@mui/material';

const styles = {
  form: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "20px",
    width: "50%", 
    margin: "0 auto", 
  },
  label: {
    position: "fixed",
    padding: 10,
  },
  button: {
    left: 40,
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: "18pt"
  }
}

function authForm({ title, buttonText }) {
  return (
      <form style={styles.form}>
          <p key={"-text"} style={styles.text}>{title}</p>
          <label key={"email-label"} sx={styles.label}>
            <input
              key={"email-input"}
              sx={styles.label}
              type="text"
              value={"Email address"}
            />
          </label>
          <label key={"password-label"} sx={styles.label}>
            <input
              key={"password-input"}
              sx={styles.label}
              type="text"
              value={"Password"}
            />
          </label>
          <Button variant="contained" type="submit" sx={styles.button}>
            {buttonText}
          </Button>
        </form>
  );
}

export default authForm;