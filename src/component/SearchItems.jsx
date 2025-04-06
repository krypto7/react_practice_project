import React from "react";

function SearchItems({ search, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="serch"
        role="searchBox"
        placeholder="search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
export default SearchItems;
