import React, { useState, useEffect, useContext, setState } from "react";
import CardListPage from "../components/cardListPage";
import { getTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { MoviesContext } from "../contexts/moviesContext";

const TvSeriesPage = (props) => {
  const context = useContext(MoviesContext);
  if (context.basePath !== "tvshows") {
    context.setBasePath("tvshows");
  }

  const { data, error, isLoading, isError } = useQuery("tvseries", getTvSeries);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter((m) => m.favorite);
  // localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId) => true;

  return (
    <CardListPage
      title="Discover TV Series"
      movies={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon movie={tvShow} />
      }}
    />
  );
};
export default TvSeriesPage;
