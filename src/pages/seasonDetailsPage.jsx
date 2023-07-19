import React from "react";
import { useParams } from "react-router-dom";
import SeasonDetails from "../components/seasonDetails";
import { getTvSeason, getShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import TvSeasonPoster from "../components/imageLists/tvSeasonPoster";
import MediaHeader from "../components/MediaHeader";
import MediaHeaderInsert from "../components/headerInserts/MediaHeaderInsert";

const SeasonDetailsPage = () => {
  const { seriesId, seasonNum } = useParams();
  console.log(`show id at tvDetailsPage: ${seriesId, seasonNum}`);

  const { data: season, error: seasonError, isLoading: seasonIsLoading, isError: seasonIsError } = useQuery(
    ["tvSeason", { seriesId: seriesId, seasonNum: seasonNum }],
    getTvSeason
  );
  console.log(`season: ${season}`);

  //get show from cache
  const { data: show, error: showError, isLoading: showIsLoading, isError: showIsError } = useQuery(
    ["show", { id: seriesId }],
    getShow
  );
  console.log(`show: ${show}`);
  
  if (season) {
    console.log(`show object at tvDetailsPage: ${season}`);
 
    console.log("show at tvDetailsPage:");
    Object.keys(season).forEach(key => {
      console.log(`${key}: ${season[key]}`);
    });
  }

  if (seasonIsLoading || showIsLoading) {
    return <Spinner />;
  }

  if (seasonIsError || showIsError) {
    return <h1>{seasonError?.message || showError?.message}</h1>;
  }

  return (
    <>
      {season ? (
        <TemplateMediaDetailsPage>
          <MediaHeader>
            <MediaHeaderInsert media={show} />
          </MediaHeader>  
          <TvSeasonPoster posterPath={season.poster_path} />
          <SeasonDetails season={season} />
        </TemplateMediaDetailsPage>
      ) : (
        <p>Waiting for TV season details</p>
      )}
    </>
  );
  
};

export default SeasonDetailsPage;
