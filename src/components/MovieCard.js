import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div>
      <img
        className="w-40 pr-4"
        alt={"Movie Poster"}
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
