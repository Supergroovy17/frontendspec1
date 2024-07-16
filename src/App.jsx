// src/App.js

import React from 'react';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <ProductList />
      <NewProductForm />
    </div>
  );
}

export default App;
