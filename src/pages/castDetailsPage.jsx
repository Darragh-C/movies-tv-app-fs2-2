import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { getCastMember } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import CastHeaderInsert from "../components/headerInserts/CastHeaderInsert";
import CastProfile from "../components/imageLists/castProfile";
import CastDetails from "../components/castDetails";

const CastDetailsPage = () => {
  const { id } = useParams();

  const { data: cast, error: castError, isLoading: castLoading, isError: isCastError } = useQuery(
    ["cast", { id: id }],
    getCastMember
  );
  if (cast) {
    console.log(`cast id: ${id}`);
 
    console.log(`cast name: ${cast.name}`);
  }
 
  if (castLoading) {
    return <Spinner />;
  }

  if (isCastError) {
    return <h1>{castError.message}</h1>;
  }

  return (
    <>
      {cast && (
        <TemplateMediaDetailsPage>
          <MediaHeader>
            <CastHeaderInsert name={cast.name} />
          </MediaHeader>  
          <CastProfile profilePath={cast.profile_path}/>
          <CastDetails cast={cast} />
        </TemplateMediaDetailsPage>
      )}
      {!cast && (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default CastDetailsPage;
