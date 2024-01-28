import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import React from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopular = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addPopularMovies(json.results));
    } catch (error) {}
  };

  React.useEffect(() => {
    getPopular();
  }, []);
};

export default usePopularMovies;