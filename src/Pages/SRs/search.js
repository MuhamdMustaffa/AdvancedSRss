import React from "react";

const Search = () => {
  return (
    <>
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control me-2 search_input"
          type="search"
          placeholder="Write what you are searching fore here......"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
