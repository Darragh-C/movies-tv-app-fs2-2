import React from "react";
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const location = useLocation()
  const { movieId } = location.state;
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <TemplateMediaDetailsPage>
      <ReviewForm movie={movie} />
    </TemplateMediaDetailsPage>
  );
};

export default WriteReviewPage;
