import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ query, setQuery }) {
  return (
    <div className="bg-gray-200 px-4 py-3 rounded flex gap-4 items-center">
      <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-lg" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="focus:outline-none w-full"
      />
    </div>
  );
}

export default Search;
