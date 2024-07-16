import React from 'react';
import useInventory from '../hooks/useInventory';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const { products, removeProduct } = useInventory();

  return (
    <div className="container">
      <h2 className="my-3">Product List</h2>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.title} - ${product.price.toFixed(2)}
            <button className="btn btn-danger btn-sm" onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;