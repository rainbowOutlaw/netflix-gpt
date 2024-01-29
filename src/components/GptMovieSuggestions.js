import React from "react";
import MovieList from "./MovieList";

const GptMovieSuggestions = ({ movieNames, movieResults }) => {
  return (
    <div className="bg-black text-white bg-opacity-80">
      {movieResults?.map((movies, index) => {
        return <MovieList title={movieNames[index]} movies={movies} />;
      })}
    </div>
  );
};

export default GptMovieSuggestions;
