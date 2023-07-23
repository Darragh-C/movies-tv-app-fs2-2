import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { getCastMember, getCastMovies } from '../api/tmdb-api'; 
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaImageList from "../components/imageLists/mediaImageList";
import MediaHeader from "../components/MediaHeader";
import CastHeaderInsert from "../components/headerInserts/CastHeaderInsert";
import CastProfile from "../components/imageLists/castProfile";
import CastDetails from "../components/castDetails";
import CastMovieList from "../components/castMovieList";


const CastDetailsPage = () => {
  const { id } = useParams();

  const { data: moviesData, error: moviesError, isLoading: isLoadingMovies, isError: isErrorMovies } = useQuery(
    [`cast-filmography-${id}`, { id: id }],
    getCastMovies
  );
  let movies = [];

  if (moviesData) {
    console.log("movies data:", moviesData);
    movies = moviesData ? moviesData.cast.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)) : [];
    console.log("movies:", movies);
  }
   

  const { data: cast, error: castError, isLoading: castLoading, isError: isCastError } = useQuery(
    ["cast", { id: id }],
    getCastMember
  );
  if (cast) {
    console.log(`cast id: ${id}`);
    console.log(`cast name: ${cast.name}`);
  }

  if (castLoading || isLoadingMovies) { 
    return <Spinner />;
  }

  if (isCastError || isErrorMovies) { 
    return <h1>{castError.message || moviesError.message}</h1>; 
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
          <CastMovieList movies={movies}/>
        </TemplateMediaDetailsPage>
      )}
      {!cast && (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default CastDetailsPage;

