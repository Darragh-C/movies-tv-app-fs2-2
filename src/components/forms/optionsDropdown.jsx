import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

function OptionsDrowdown({ label, items, onAction }) {

  const [selectedItem, setSelectedItem] = useState("");
  

  const handleItemChange = (e) => {
    console.log("e.target.value:", e.target.value);
    setSelectedItem(e.target.value);
    onAction(e.target.value);
  }

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel id={label + "-input"}>{label}</InputLabel>
      <Select
        labelId={label + "-label"}
        id={label + "-id"}
        value={selectedItem}
        name={"test"}
        onChange={handleItemChange}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default OptionsDrowdown;

