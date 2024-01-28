import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          placeholder="What would you like to watch ?"
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-700 py-2 px-4 m-4 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
