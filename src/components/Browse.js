import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <GptSearch />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
