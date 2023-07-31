import React, { useContext, useState, useEffect } from "react";
import CardListPage from "../components/cardListPage";
import { getMovies, getGenres, getMoviesByQuery } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { MoviesContext } from "../contexts/moviesContext";
import MovieQueryParams from "../dataStore/movie-query-params.json"
import langCodes from "../dataStore/iso-codes.json"

const MovieSearch = () => {

  const [discoverPage, setDiscoverPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [discoverOn, setDiscoverOn] = useState(true);
  const context = useContext(MoviesContext);

  useEffect(() => {
    if (context.basePath !== "movies") {
      context.setBasePath("movies");
      console.log(context.linkBasePath);
    }
  }, [context.basePath]);

  useEffect(() => {
    
    const fetchMovies = async () => {
      try {
        console.log("discoverPageHook", discoverPage);
        console.log("discoverOn:", discoverOn);
        context.updateFetchContext("Discover");
        const moviesData = await getMovies(discoverPage);
        console.log(moviesData.results);
        setMovies(moviesData.results)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    if (discoverOn) {
      fetchMovies(); 
    }
  }, [discoverPage]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getGenres();
        console.log(genresData);
        setGenres(genresData.genres)
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres(); 
  }, []);

  // useEffect(() => {
  //   setSearchTrigger(true);
  // }, [searchString]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        console.log("searchPageHook", searchPage);
        context.updateFetchContext("Search");
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}${searchString}&page=${searchPage}`);
        const jsonData = await response.json();
        setMovies(jsonData.results);
        // setSearchString("");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (searchTrigger) {
      
      searchMovies();
      setSearchTrigger(false); 
      //setSearchString("");
      
     }
  }, [searchTrigger, searchPage]); 

  const handlePageChange = (pageNum) => {
    console.log("handling page change", pageNum);
    console.log("context.currentFetchContext", context.currentFetchContext);
    switch (context.currentFetchContext) {
      case 'Discover':
        setDiscoverPage(prevPage => pageNum);
        console.log("discoverPage", discoverPage);
        break;
      case 'Search':
        setSearchPage(prevPage => pageNum);
        console.log("searchPage", searchPage);
        setDiscoverOn(false);
        setSearchTrigger(true);
        break;
    }
  };

  const getLangId = (langName) => {
    const lang = langCodes.find(lang => lang.name === langName);
    return lang.id;
  }

  const getGenreId = (genreName, genres) => {
    const genre = genres.find(genre => genre.name === genreName);
    return genre.id;
  }

  const handleQueryObjects = (rawQueryObjs) => {
    let fullQueryString = "";
    rawQueryObjs.forEach(function(queryObj) {
      let queryString = "";
      queryString += MovieQueryParams[queryObj.label];
      switch (queryObj.label) {
        case 'year':
          queryString += queryObj.value;
          break;
        case 'genres':
          const genreId = getGenreId(queryObj.value, genres);
          queryString += genreId;
          break;
        case 'vote':
          queryString += queryObj.value;
          break;
        case 'language':
          const langCode = getLangId(queryObj.value);
          queryString += langCode;
          break;
      }
      fullQueryString += queryString;
    })
    setSearchString(fullQueryString);
    setSearchTrigger(true);
  };

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter((m) => m.favorite);
  // localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId) => true;

  return (
    <CardListPage
      movies={movies}
      title="Search Movies"
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      pagination={handlePageChange}
      searchQuery={handleQueryObjects} 
    />
  );
};
export default MovieSearch;