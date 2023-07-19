import React from "react";
import Spinner from '../spinner';

const styles = {
  image: {
    width: "100%",
  }
}

const tvSeasonPoster = ({ posterPath }) => {

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
        <Spinner />
      )}     
    </>
  );
};

export default tvSeasonPoster;
