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

const initialFormData = [
  {
    label: "",
    value: "",
  },
];

const multiCriteriaSearch = ({labels, onAction}) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("formData", formData);
    onAction(formData);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const data = {
      label: name,
      value: value,
    };
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = data;
      return updatedFormData;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      {labels.map((data, index) => (
        <label key={index + "-label"} sx={styles.label}>
          <p key={index + "-text"} style={styles.text}>
            {data}:
          </p>
          <input
            key={index + "-input"}
            sx={styles.label}
            type="text"
            name={data}
            value={data.value}
            onChange={(event) => handleInputChange(event, index)}
          />
        </label>
      ))}
      <br />
      <button key="submit-button" sx={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default multiCriteriaSearch;