import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import CastList from "../castList";
import Spinner from '../../components/spinner';

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
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const CastDetails = ( { cast }) => {
  const { id } = useParams();

  console.log(`cast: ${cast}`);

  const [drawerOpen, setDrawerOpen] = useState(false); 
  return (
    <>
      <Paper component="ul" sx={styles.chipSet}>
          <Chip icon={<CalendarMonthIcon />} label={cast.birthday} />
          <Chip
            label={`Born: ${cast.place_of_birth}`}
          />
      </Paper>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {cast.biography}
      </Typography>
    </>
  );
};
export default  CastDetails ;
