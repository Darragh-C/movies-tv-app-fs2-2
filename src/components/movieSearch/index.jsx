import React, { useState } from "react"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TextField from "@mui/material/TextField";
import SubmitText from "../forms/submitText";

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

export default function movieSearch(props) {

  const [multiSearchText, setMultiSearchText] = useState("");

  const handleMultiTextChange = (e) => {
    setMultiSearchText(e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <SubmitText label="Search movies and cast" buttonText={"Search"} />
        </CardContent>
      </Card>
    </>
  );
}
