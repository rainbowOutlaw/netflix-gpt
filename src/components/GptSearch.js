import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="Netflix background" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions
        movieNames={movieNames}
        movieResults={movieResults}
      />
    </div>
  );
};

export default GptSearch;
