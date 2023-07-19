import React, { useState } from "react";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AddGenreTags from "../forms/addGenreTags";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
};

const GenreTags = ( { genres }) => {

  return (
    <>
      {genres.length > 0 && (
        <Paper component="ul" sx={styles.chipSet}>
          <li>
            <Chip label="Genres" sx={styles.chipLabel} color="primary" />
          </li>
          {genres.map((g) => (
            <li key={g}>
              <Chip label={g} />
            </li>
          ))}
        </Paper>
      )}
    </> 
  );
};
export default  GenreTags;
