import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
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
    float: 'center', 
  },
  episodeNum: {
    margin: 2, 
  },
  text: {
    fontFamily: 'sans-serif'
  }
};

const CastList = ( { cast } ) => {
  return (
    <>
      <br></br>
      <h3 style={styles.text}>Cast</h3>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', alignItems: "center" }}>
        {cast.map((c, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={c.id 
                  ? `https://www.themoviedb.org/t/p/w276_and_h350_face${c.profile_path}` 
                  : "/static/images/avatar/1.jpg"} />
              </ListItemAvatar>
              <ListItemText
                primary={c.name}
                
              />
              <Link to={`/cast/${c.id}`}>
                <Button variant="outlined" size="medium" color="primary">
                  More Info ...
                </Button>
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};
export default  CastList ;