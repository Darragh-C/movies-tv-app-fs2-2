import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { getAllPolularCastPages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import React from 'react';
import Spinner from '../../components/spinner';


const AddCast = ({ onAction }) => {

  const { data, error, isLoading, isError } = useQuery("popular-cast", getAllPolularCastPages);

  let cast;
  if (data) {
    cast = data.map((c) => c.name);
  }

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleCastSelection = (castName) => {
    const castObject = data.filter((o) => o.name === castName);
    const castTypeObject = {
      type: "cast",
      value: {
        name: castObject[0].name,
        profile_path: castObject[0].profile_path,
        id: castObject[0].id,
      }  
    }
    console.log("castTypeObject:", castTypeObject);
    onAction(castTypeObject);
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cast}
      sx={{ width: 300 }}
      onChange={(e) => {
        console.log("Selected Value:", e.target.innerText);
        handleCastSelection(e.target.innerText);
      }}
      renderInput={(params) => <TextField {...params} label="Cast" />}
    />
  );
};

export default AddCast;