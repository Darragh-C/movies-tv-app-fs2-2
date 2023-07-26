import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} ); 
  const [mustWatch, setMustWatch] = useState([]);
  const [linkBasePath, setLinkBasePath] = useState("");
  const [tvFavourites, setTvFavourites] = useState([]);
  const [castFavourites, setCastFavourites] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToTvFavourites = (show) => {
    let updatedTvFavourites = [...tvFavourites];
    if (!tvFavourites.includes(show.id)) {
      updatedTvFavourites.push(show.id);
    }
    setTvFavourites(updatedTvFavourites);
  };

  const addToCastFavourites = (cast) => {
    console.log("cast fave:", cast)
    let updatedCastFavourites = [...castFavourites];
    if (!castFavourites.includes(cast.id)) {
      updatedCastFavourites.push(cast.id);
    }
    setCastFavourites(updatedCastFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (item, type) => {
    if (type === "movie") {
      setFavourites(favourites.filter((mId) => mId !== item.id));
    } else if (type === "tv") {
      setTvFavourites(tvFavourites.filter((tvId) => tvId !== item.id));
    } else if (type === "cast") {
      setCastFavourites(castFavourites.filter((castId) => castId !== item.id));
    }    
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToMustWatch = (movie) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      updatedMustWatch.push(movie.id);
    }
    setMustWatch(updatedMustWatch);
    console.log(`Must Watch: ${updatedMustWatch}`);
  };  

  const setBasePath = (basePath) => {
    setLinkBasePath(basePath);
  };
  

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addToMustWatch,
        linkBasePath,
        setBasePath,
        addReview,
        tvFavourites,
        addToTvFavourites,
        castFavourites, 
        addToCastFavourites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
