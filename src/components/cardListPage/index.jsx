import React, { useState } from "react";
import MediaHeader from "../mediaHeader";
import CardListFilter from "../cardListFilter";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import CardList from "../cardList";
import CardListHeaderInsert from "../headerInserts/cardListHeaderInsert";
import CardListPagination from "../cardListPagination";
import MovieSearch from "../movieSearch";
import MultiCriteriaSearch from "../forms/multiCriteriaSearch";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    width: 90, 
    height: 40, 
    marginTop: 8,
    position: "fixed",
    right: 2,
  },
  searchFab: {
    top: 52,
  },
  filterFab: {
    top: 2,
  },
};

const searchLabels = ["year", "langauge"];

function CardListPage({ movies, title, action, pagination, search }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Popular");
  const [ratingFilter, setRatingFilter] = useState("1");

  console.log(`genreFilter: ${genreFilter}`);
  console.log(`sortOption: ${sortOption}`);

  const genreId = Number(genreFilter);

  let displayedMovies = movies
  .filter((m) => {
    const filterProperty = m.title ? m.title.toLowerCase() : m.name.toLowerCase();
    return filterProperty.search(titleFilter.toLowerCase()) !== -1;
  })
  .filter((m) => {
    return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  })
  .filter((m) => {
    return m.vote_average >= ratingFilter;
  })
  .sort((a,b) => {
    switch (sortOption) {
      case "Rating":
        return b.vote_average - a.vote_average;
      case "Oldest":
        if (a.release_date) {
          return new Date(a.release_date) - new Date(b.release_date);
        } else {
          return new Date(a.first_air_date) - new Date(b.first_air_date);
        }
      case "Latest":
        if (a.release_date) {
          return new Date(b.release_date) - new Date(a.release_date);
        } else {
          return new Date(b.first_air_date) - new Date(a.first_air_date);
        }
      default:
        return b.popularity - a.popularity;
    }
  });

  const handleChange = (type, value) => {
    if (type === "title") {
      setTitleFilter(value);
    } else if (type === "genre") {
      setGenreFilter(value);
    } else if (type === "sort") {
      setSortOption(value);
    } else {
      setRatingFilter(value);
    }
  };

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <MediaHeader>
            <CardListHeaderInsert title={title}/>
          </MediaHeader>
        </Grid>
        <Grid item container spacing={5}>
          <CardList
            items={displayedMovies}
            action={action}
          />
        </Grid>
      </Grid>
      <CardListPagination onPagination={pagination}/>
      <Fab
        id="filter-fab"
        color="secondary"
        variant="extended"
        onClick={() => setFilterDrawerOpen(true)}
        sx={{...styles.fab, ...styles.filterFab}}
      >
        Filter
      </Fab>
      <Drawer
        id="filter-drawer"
        anchor="left"
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
      >
        <CardListFilter
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          sortOption={sortOption}
          ratingFilter={ratingFilter}
        />
      </Drawer>
      <Fab
        id="search-fab"
        color="secondary"
        variant="extended"
        onClick={() => setSearchDrawerOpen(true)}
        sx={{...styles.fab, ...styles.searchFab}}
      >
        Search
      </Fab>
      <Drawer
        id="search-drawer"
        anchor="left"
        open={searchDrawerOpen}
        onClose={() => setSearchDrawerOpen(false)}
      >
        <MovieSearch/>
        <MultiCriteriaSearch labels={searchLabels} onAction={search}/>
      </Drawer>
    </>  
  );
}
export default CardListPage;
