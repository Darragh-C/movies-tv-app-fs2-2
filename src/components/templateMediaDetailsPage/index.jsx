import React from "react";
import Grid from "@mui/material/Grid";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const TemplateMediaDetailsPage = ({ children }) => {

  return (
    <>
      {children[0]}

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            {children[1]}
          </div>
        </Grid>

        <Grid item xs={9}>
          {children[2]}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMediaDetailsPage;
