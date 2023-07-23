import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [linkBasePath, setLinkBasePath] = useState("");
  const [tvFavourites, setTvFavourites] = useState([]);

  const addToTvFavourites = (show) => {
    let updatedTvFavourites = [...tvFavourites];
    if (!tvFavourites.includes(show.id)) {
      updatedTvFavourites.push(show.id);
    }
    setTvFavourites(updatedTvFavourites);
  };

  const setBasePath = (basePath) => {
    setLinkBasePath(basePath);
  }

  return (
    <TvContext.Provider
      value={{
        linkBasePath,
        setBasePath,
        tvFavourites,
        addToTvFavourites,
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;