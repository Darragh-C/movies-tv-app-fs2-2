import React from "react";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';

const FastasyMediaHeaderInsert = ( { title } ) => {

  return (
    <>
        {title ? (
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
        ) : (
          <Typography variant="h4" component="h3">
            Your fantasy title
          </Typography>
        )}
    </>
    
  );
};

export default FastasyMediaHeaderInsert;
