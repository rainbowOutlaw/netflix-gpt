import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import React from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {}
  };

  React.useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
