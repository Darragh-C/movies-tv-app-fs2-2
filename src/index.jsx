import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import MoviesPage from "./pages/moviesPage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvSeriesPage from "./pages/tvSeriesPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import SeasonDetailsPage from "./pages/seasonDetailsPage";
import CastDetailsPage from "./pages/castDetailsPage";
import FantasyMoviePage from "./pages/fantasyMoviePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/fantasymovie" element={<FantasyMoviePage />} />
            <Route path="/cast/:id" element={<CastDetailsPage />} />
            <Route path="/tvshows/:seriesId/season/:seasonNum" element={<SeasonDetailsPage />} />
            <Route path="/tvshows/:id" element={<TvDetailsPage />} />
            <Route path="/tvshows" element={<TvSeriesPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/" element={<MoviesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
