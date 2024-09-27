import React, { useState } from "react";
import "./FilterableProductTable.css";

/**
 * Wire up the 2 input fields here to be controlled components
 */
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    
  };

  const handleInStockChange = (event) => {
    const newInStock = event.target.checked;
    setInStock(newInStock);
   
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />

      <label htmlFor="in-stock">
        <input
          id="in-stock"
          type="checkbox"
          checked={inStock}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </label>
    </div>
  );
}