import React, { useState } from 'react';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

function AddGenreTags({ onAction }) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  const [selectedGenre, setSelectedGenre] = useState("");
  // const [selectedId, setSelectedId] = useState(0);

  const handleGenreChange = (e) => {
    console.log()
    setSelectedGenre(e.target.value);
    const data = {
      type: "genre",
      value: e.target.value,
    }

    console.log(data);
    onAction(data);
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);

  // };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel id="genre-label">Genre</InputLabel>
      <Select
        labelId="genre-label"
        id="genre-id"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {genres.map((genre) => {
          return (
            <MenuItem key={genre.id} value={genre.name}>
              {genre.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default AddGenreTags;

