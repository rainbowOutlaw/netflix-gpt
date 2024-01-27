import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-36 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Fantasy"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Romance"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Action"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
