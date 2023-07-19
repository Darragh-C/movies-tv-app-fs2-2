import React from "react";
import Typography from "@mui/material/Typography";

const CardListHeaderInsert = ( { title } ) => {

  return (
    <Typography variant="h4" component="h3">
      {title}
    </Typography>
  );
};

export default CardListHeaderInsert;
