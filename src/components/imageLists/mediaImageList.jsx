import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const MediaImageList = ({ images }) => {

  return (
    <ImageList cols={1}>
      {images.map((image) => (
        <ImageListItem
          key={image.file_path}
          sx={styles.gridListTile}
          cols={1}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
            alt={image.poster_path}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MediaImageList;
