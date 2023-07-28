import React, { useContext, useState, useEffect } from "react";
import CardListPage from "../components/cardListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { MoviesContext } from "../contexts/moviesContext";

const MovieSearch = () => {
  const context = useContext(MoviesContext);

  useEffect(() => {
    if (context.basePath !== "movies") {
      context.setBasePath("movies");
      console.log(context.linkBasePath);
    }
  }, [context.basePath]);


  const [page, setPage] = useState(1);

  const handlePageChange = (pageNum) => {
    console.log("handling page change", pageNum)
    setPage(prevPage => pageNum);
  };

  const { data, error, isLoading, isError, refetch } = useQuery("discover", () => getMovies(page));

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter((m) => m.favorite);
  // localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId) => true;

  return (
    <CardListPage
      title="Search Movies"
      movies={movies}
      pagination={handlePageChange}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default MovieSearch;