import React, { useState } from 'react';

const styles = {
  form: {
    border: "solid"
  },
  label: {
    position: "fixed",
    padding: 10,
  },
  button: {
    width: 90,
    height: 30,
    left: 20,
    position: "absolute",
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
    /*margin: auto;*/
    paddingTop: 10,
    marginTop:-20,
  },
  text: {
    fontFamily: "sans-serif"
  }
}

function LoginForm() {
  return (
    <div sx={styles.form}>
      <form >
          <br/>
          <label key={"email-label"} sx={styles.label}>
            <p key={"-text"} style={styles.text}>{"Log in"}:</p>
            <input
              key={"email-input"}
              sx={styles.label}
              type="text"
              value={"Email address"}
            />
          </label>
          <label key={"password-label"} sx={styles.label}>
            <p key={"password-text"} style={styles.text}>{"Password"}:</p>
            <input
              key={"password-input"}
              sx={styles.label}
              type="text"
              value={"Password"}
            />
          </label>
          <button key={"-button"} sx={styles.button} type="submit">
            {"Log in"}
          </button>
        </form>
    </div>
    
  );
}

export default LoginForm;