import React from "react";
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie, getMovieImages } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import MediaHeaderInsert from "../components/headerInserts/MediaHeaderInsert";

const WriteReviewPage = (props) => {
  const location = useLocation()
  const { movieId } = location.state;

  const { data: movie, error: movieError, isLoading: movieLoading, isError: isMovieError } = useQuery(
    ["movie", { id: movieId  }],
    getMovie
  );

  const { data: images, error: movieImagesError, isLoading: movieImagesLoading, isError: isMovieImagesError } = useQuery(
    ["movieImages", { id: movieId }],
    getMovieImages
  );

  let posters;
  if (images) {
    posters = images.posters;
  }

  
  if (movieImagesLoading || movieLoading ) {
    return <Spinner />;
  }

  if (isMovieImagesError || isMovieError ) {
    return <h1>{movieImagesError?.message || movieError?.message }</h1>;
  }
  return (
    <TemplateMediaDetailsPage>
      <MediaHeader>
        <MediaHeaderInsert media={movie} />
      </MediaHeader>  
      <MediaImageList images={posters} />
      <ReviewForm movie={movie} />
    </TemplateMediaDetailsPage>
  );
};

export default WriteReviewPage;
