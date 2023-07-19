import React from "react";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';

const MediaHeaderInsert = ( { media } ) => {

  return (
    <Typography variant="h4" component="h3">
      {media.title ? media.title : media.name}{"   "}
      <a href={media.homepage}>
        <HomeIcon color="primary"  fontSize="='large"/>
      </a>
      <br />
      <span>{`${media.tagline}`} </span>
    </Typography>
  );
};

export default MediaHeaderInsert;
