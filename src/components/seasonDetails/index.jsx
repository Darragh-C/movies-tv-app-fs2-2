import React from "react";
import Typography from "@mui/material/Typography";
import EpisodeList from "../episodeList";

const styles = {
  text: {
    alignItems: "center",
  }
};

const SeasonDetails = ( { season }) => {
  return (
    <>
      <Typography sx={styles.text} variant="h6" component="p">
        {season.name}
      </Typography>

      <EpisodeList episodes={season.episodes}/>
    </>
  );
};
export default  SeasonDetails ;
