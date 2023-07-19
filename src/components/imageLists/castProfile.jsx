import React from "react";
import Spinner from '../spinner';

const styles = {
  image: {
    width: "100%",
  }
}

const CastProfile = ({ profilePath }) => {

  return (
    <>
      {profilePath ? (
        <div>
          <img
            style={styles.image}
            src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profilePath}`}
            alt={profilePath}
          />
        </div>
      ) : (
        <Spinner />
      )}     
    </>
  );
};

export default CastProfile;
