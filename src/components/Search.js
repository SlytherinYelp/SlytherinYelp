import React from 'react';

const Search = ({ search, handleOnChangeSearch, handleOnClickSearch }) => {
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleOnClickSearch}>
        <input
          className="search__input"
          type="text"
          name="search"
          value={search}
          onChange={handleOnChangeSearch}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
