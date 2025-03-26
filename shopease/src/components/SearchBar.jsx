import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
  };

  return (
    <input
      type="text"
      placeholder="Search Products"
      value={searchQuery}
      onChange={handleSearch}
      className="w-full p-2 border rounded-md focus:ring focus-ring-blue-400"
    />
  );
};

export default SearchBar;
