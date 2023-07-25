import React, { useContext } from "react";
import CardListPage from "../components/cardListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getCastMember } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import CastList from "../components/castList";

import CardListHeaderInsert from "../components/headerInserts/cardListHeaderInsert";
import MediaHeader from "../components/mediaHeader";

const FavouriteCastPage = (props) => {
  const { castFavourites: castIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteCastQueries = useQueries(
    castIds.map((castIds) => {
      return {
        queryKey: ["cast", { id: castIds }],
        queryFn: getCastMember,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteCastQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const cast = favouriteCastQueries.map((q) => q.data);

  return (
    <>
      <MediaHeader>
        <CardListHeaderInsert title={"Favourite cast"}/>
      </MediaHeader>
      <CastList
        cast={cast}
      />    
    </>

  );
};

export default FavouriteCastPage;
