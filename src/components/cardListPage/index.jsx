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
import OptionsDrowdown from "../forms/optionsDropdown";
import Languages from "../../dataStore/iso-codes.json";
import Ratings from "../../dataStore/ratings.json";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { Button } from "@mui/base";

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
  p: {
    fontFamily: "sans-serif",
    textAlign: "center",
  }
};


function CardListPage({ movies, title, action, pagination, searchQuery }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Popular");
  const [ratingFilter, setRatingFilter] = useState("1");
  const [queryObject, setQueryObject] = useState([]);

  const ratings = [1,2,3,4,5,6,7,8,9,10];

  let genres;

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (data) {
    genres = data.genres;
  }

  const genreId = Number(genreFilter);

  const currentYear = new Date().getFullYear();
  const yearArray = [];
  for (let i = 1888; i <= currentYear; i++) {
    yearArray.push(i);
  }

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

  const pushQueryObject = (label, value) => {
    const newObject = {
      label: label,
      value: value,
    };
    setQueryObject((prevObject) => [...prevObject, newObject]);
  };

  console.log("searchQuery type:", typeof searchQuery);

  const submitQuery = (e) => {
    e.preventDefault();
    console.log("queryObject:", queryObject);
    searchQuery(queryObject);

  };

  const printHello = (e) => {
    e.preventDefault();
    console.log("printHello");
    searchQuery('SQhello');
  }

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
 
        <div>
          <OptionsDrowdown onAction={(value) => pushQueryObject("From year", value)} label={"From year"} items={yearArray.sort((a, b) => b - a)} />
          <OptionsDrowdown onAction={(value) => pushQueryObject("To year", value)} label={"To year"} items={yearArray.sort((a, b) => b - a)} />
        </div>
        <OptionsDrowdown onAction={(value) => pushQueryObject("year", value)} label={"Specific year"} items={yearArray.sort((a, b) => b - a)} />
        <OptionsDrowdown onAction={(value) => pushQueryObject("language", value)} label={"Language"} items={Languages.map((langObj) => langObj.name).sort((a, b) => a.localeCompare(b))} initialState={"English"} />
        <OptionsDrowdown onAction={(value) => pushQueryObject("vote", value)} label={"Rating"} items={ratings} />
        <OptionsDrowdown onAction={(value) => pushQueryObject("genres", value)} label={"Genre"} items={genres.map((genreObj) => genreObj.name).sort((a, b) => a.localeCompare(b))} />
        <Button variant="outlined" onClick={submitQuery}>Search</Button>
      </Drawer>
    </>  
  );
}
export default CardListPage;
