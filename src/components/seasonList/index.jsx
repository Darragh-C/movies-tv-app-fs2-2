import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

const SeasonList = ( { show, seasons } ) => {
  return (
    <>
      <h2>Seasons</h2>
    
      {seasons.map((s) => (
        <Paper key={s.name + "paper"} component="ul" sx={styles.chipSet}>
          <li key={s.name}>
            <Chip label={s.name} sx={styles.chipLabel} color="primary" />
          </li>
          <li key={s.name+s.air_date}>
            <Chip label={s.air_date} />
          </li>
          <li key={s.name + " episodes"}>
            <Chip label={s.episode_count + " episodes"} />
          </li>
          <li key={s.name + " link"}>
            <Link to={`/tvshows/${show}/season/${parseInt(s.name.match(/\d+/))}`}> 
              <Button variant="outlined" size="medium" color="primary">
                More Info ...
              </Button>
            </Link>
          </li>
        </Paper>  
      ))}
      
    </>

  )    

};
export default SeasonList;