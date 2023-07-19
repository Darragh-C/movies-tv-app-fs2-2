import React from "react";
import CardItem from "../cardItem";
import Grid from "@mui/material/Grid";

const CardList = ( { items, action }) => {
  let cards = items.map((i) => (
    <Grid key={i.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <CardItem key={i.id} item={i} action={action}/>
    </Grid>
  ));
  return cards;
};

export default CardList;
