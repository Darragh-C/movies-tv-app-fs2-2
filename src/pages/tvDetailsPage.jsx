import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import { getShow, getTvShowImages } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import MediaHeaderInsert from "../components/headerInserts/MediaHeaderInsert";

const TvDetailsPage = () => {
  const { id } = useParams();

  const { data: show, error: showError, isLoading: showIsLoading, isError: showIsError } = useQuery(
    ["show", { id: id }],
    getShow
  );

  const {data: images, error: imagesError, isLoading: imagesIsLoading, isError: imagesIsError } = useQuery(
    ["tvImages", { id: id }],
    getTvShowImages
  );
  let posters;
  if (images) {
    posters = images.posters;
  }

  if (showIsLoading || imagesIsLoading) {
    return <Spinner />;
  }

  if (showIsError || imagesIsError) {
    return <h1>{showError?.message || imagesError?.message}</h1>;
  }

  return (
    <>
      {show && images && (
        <TemplateMediaDetailsPage>
          <MediaHeader>
            <MediaHeaderInsert media={show} />
          </MediaHeader>  
          <MediaImageList images={posters} />
          <TvDetails show={show} />
        </TemplateMediaDetailsPage>
      )}
      {!show || !images && (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TvDetailsPage;
