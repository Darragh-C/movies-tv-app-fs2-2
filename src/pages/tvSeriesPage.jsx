import React, { useState, useEffect, useContext } from "react";
import CardListPage from "../components/cardListPage";
import { getTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TvContext } from "../contexts/tvContext";
import AddToTvFavouritesIcon from "../components/cardIcons/addToTvFavourites";

const TvSeriesPage = (props) => {
  const context = useContext(TvContext);
  if (context.basePath !== "tvshows") {
    context.setBasePath("tvshows");
  }

  const [page, setPage] = useState(1);

  const handlePageChange = (pageNum) => {
    console.log("handling page change", pageNum)
    setPage(prevPage => pageNum);
  }

  const { data, error, isLoading, isError, refetch } = useQuery("tvseries", () => getTvSeries(page));

  useEffect(() => {
    refetch();
  }, [page]);

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
      pagination={handlePageChange}
      action={(show) => {
        return <AddToTvFavouritesIcon show={show} />
      }}
    />
  );
};
export default TvSeriesPage;
