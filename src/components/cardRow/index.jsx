import React from "react";
import Grid from "@mui/material/Grid";

const CardRow = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children.map((child, index) => (
        <Grid item key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
export default CardRow;