import React from "react";

const Search = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <form className="form-inline mx-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </div>
  );
};

export default Search;
