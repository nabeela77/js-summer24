import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTableContainer from './ProductTableContainer';

const products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  return (
    <div id="filterable-product-table">
      <h1>Filterable Product Table</h1>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        onlyInStock={onlyInStock}
        onOnlyInStockChange={setOnlyInStock}
      />
      <ProductTableContainer
        products={products}
        filterText={filterText}
        onlyInStock={onlyInStock}
      />
    </div>
  );
};

export default FilterableProductTable;

