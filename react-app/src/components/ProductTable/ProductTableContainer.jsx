import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTableContainer = () => {

  return (
    <table id="product-table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

    </table>
  );
};

export default ProductTableContainer;


