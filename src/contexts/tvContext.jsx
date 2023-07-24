import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [tvFavourites, setTvFavourites] = useState([]);

  const addToTvFavourites = (show) => {
    let updatedTvFavourites = [...tvFavourites];
    if (!tvFavourites.includes(show.id)) {
      updatedTvFavourites.push(show.id);
    }
    setTvFavourites(updatedTvFavourites);
  };

  return (
    <TvContext.Provider
      value={{
        tvFavourites,
        addToTvFavourites,
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;
