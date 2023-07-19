import React from "react";
import MediaHeader from "../MediaHeader";
import MediaHeaderInsert from "../headerInserts/MediaHeaderInsert";
import { getTvShowImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import TemplateMediaDetailsPage from "../templateMediaDetailsPage";
import TvDetails from "../tvDetails";
import MediaImageList from "../imageLists/mediaImageList";

const TemplateTvPage = ({ show }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["tvImages", { id: show.id }],
    getTvShowImages
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
        <MediaHeaderInsert media={show}/>
      </MediaHeader>  
      <MediaImageList images={images}/>
      <TvDetails show={show}/>
    </TemplateMediaDetailsPage>
  );

  
};

export default TemplateTvPage;
