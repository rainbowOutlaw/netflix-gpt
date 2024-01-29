import React from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const gptSearchText = React.useRef(null);

  const findmovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest five comma separated movies for the search query: " +
      gptSearchText.current.value +
      ". Example result: Me before you, Titanic, Kal ho na ho, Notting hill, Pretty woman.";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      return;
    }

    console.log(gptResults.choices?.[0]?.message?.content.split(", "));

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movie) => findmovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder="What would you like to watch ?"
          className="p-4 m-4 col-span-9"
          type="text"
          ref={gptSearchText}
        />
        <button
          className="bg-red-700 py-2 px-4 m-4 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
