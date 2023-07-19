import React from "react";
import MediaHeader from "../MediaHeader";
import MediaHeaderInsert from "../headerInserts/MediaHeaderInsert";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import TemplateMediaDetailsPage from "../templateMediaDetailsPage";
import MovieDetails from "../movieDetails";
import MediaImageList from "../imageLists/mediaImageList";


const TemplateMoviePage = ({ movie }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <TemplateMediaDetailsPage>
      <MediaHeader>
        <MediaHeaderInsert media={movie}/>
      </MediaHeader>  
      <MediaImageList images={images}/>
      <MovieDetails movie={movie}/>
    </TemplateMediaDetailsPage>
  );
};

export default TemplateMoviePage;
