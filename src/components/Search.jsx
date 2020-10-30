import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline my-2 my-lg-0 mx-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Employee"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;
