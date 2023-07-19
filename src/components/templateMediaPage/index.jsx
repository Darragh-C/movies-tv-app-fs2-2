import React from "react";
import MediaHeader from "../MediaHeader";
import MediaHeaderInsert from "../headerInserts/MediaHeaderInsert";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import TemplateMediaDetailsPage from "../templateMediaDetailsPage";
import MovieDetails from "../movieDetails";
import MediaImageList from "../imageLists/mediaImageList";


const TemplateMediaPage = ({ movie, images }) => {

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
