import React, { useContext  } from "react";
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
import img from '../../images/film-poster-placeholder.png';
import { MoviesContext } from "../../contexts/moviesContext";

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

const CastMovieList = ( { movies } ) => {
  const context = useContext(MoviesContext);
  return (
    <>
      <br></br>
      <h3 style={styles.text}>Movies</h3>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', alignItems: "center" }}>
        {movies.map((m, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={m.poster_path 
                  ? `https://image.tmdb.org/t/p/w500/${m.poster_path}` 
                  : img
                } />
              </ListItemAvatar>
              <ListItemText
                primary={m.title}
                
              />
              <Link to={`/${context.linkBasePath}/${m.id}`}>
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
export default  CastMovieList ;