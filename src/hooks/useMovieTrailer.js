import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import React from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filter_data = json.results.filter((movie) => {
      return movie.type === "Trailer";
    });

    const trailer = filter_data.length ? filter_data[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  React.useEffect(() => {
    !trailerVideo && getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
