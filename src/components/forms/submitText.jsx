import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import { StyleSharp } from '@mui/icons-material';

const styles = {
  label: {
    position: "fixed",
    padding: 10,
  },
  button: {
    width: 90,
    height: 30,
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

function SubmitText({ label, onAction }) {
  const [formData, setFormData] = useState({
    type: "",
    value: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    const data = {
      type: name,
      value: value,
    }
    setFormData(data);

  };

  const handleSubmit = (event) => {
    onAction(formData);
    event.preventDefault();
    setFormData({
      type: "",
      value: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <br/>
      <Grid key={label + "-grid"} container spacing={2}>
        <Grid key={label + "-griditem1"} item xs={0.25}></Grid>
        <Grid key={label + "-griditem2"} item xs={6}>
          <label key={label + "-label"} sx={styles.label}>
            <p key={label + "-text"} style={styles.text}>Add {label}:</p>
            <input
              key={label + "-input"}
              sx={styles.label}
              type="text"
              name={label}
              value={formData.value}
              onChange={handleInputChange}
            />
          </label>
        </Grid>
        <Grid key={label + "griditem3"} item xs={2}>
          <button key={label + "-button"} sx={styles.button} type="submit">
            Submit
          </button>
        </Grid>
        <Grid key={label + "griditem4"} item xs={2}></Grid>
      </Grid>
    </form>
  );
}

export default SubmitText;