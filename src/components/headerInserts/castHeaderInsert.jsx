import React from "react";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';

const CastHeaderInsert = ( { name } ) => {

  return (
    <Typography variant="h4" component="h3">
      {name}{"   "}
    </Typography>
  );
};

export default CastHeaderInsert;
