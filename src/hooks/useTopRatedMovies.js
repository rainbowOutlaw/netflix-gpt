import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import React from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addTopRatedMovies(json.results));
    } catch (error) {}
  };

  React.useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
