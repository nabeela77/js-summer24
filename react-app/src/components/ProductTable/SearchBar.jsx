import React from 'react';

const SearchBar = () => {
  return (
    <div id="search-bar">
      <input
        type="text"
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
        />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;

