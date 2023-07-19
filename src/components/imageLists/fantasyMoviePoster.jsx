import React from "react";
import MovieIcon from '@mui/icons-material/Movie';

const styles = {
  image: {
    width: "100%",
  }
}

const FantasyMoviePoster = ({ posterPath }) => {

  return (
    <>
      {posterPath ? (
        <div>
          <img
            style={styles.image}
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={posterPath}
          />
        </div>
      ) : (
        <MovieIcon fontSize="large"/>
      )}     
    </>
  );
};

export default FantasyMoviePoster;
