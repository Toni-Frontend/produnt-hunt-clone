import React, { useState } from "react";
import Router from 'next/router';

const Search = () => {
  const [search, setSearch] = useState("");

  const searchProduct = e => {
    e.preventDefault();

    if(search.trim() === '') return;
    Router.push({
      pathname: '/search',
      query: { q : search}
    })
  }

  return (
    <form id="form" onSubmit={searchProduct}>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Discover your next favorite thing…"
      />
    </form>
  );
};

export default Search;
