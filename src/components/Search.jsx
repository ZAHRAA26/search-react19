import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="../../public/search.svg" alt="search" />
        <input
          type="text"
          placeholder="search through thouthands of movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Search;
