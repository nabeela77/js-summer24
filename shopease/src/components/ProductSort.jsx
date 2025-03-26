import React from "react";

const ProductSort = ({ sortOption, setSortOption }) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="border p-2 rounded mb-4"
    >
      <option value="default">Default</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
      <option value="name-alpha-a-z">Name: A-Z</option>
      <option value="name-alpha-z-a">Name: Z-A</option>
    </select>
  );
};

export default ProductSort;
