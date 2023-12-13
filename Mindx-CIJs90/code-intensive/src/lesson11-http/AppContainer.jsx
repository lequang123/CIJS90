// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const AppContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [number, setNumber] = useState(null);

  const DEFAULT_PRODUCT_NUMBER = 3;

  useEffect(() => {
    // Fetch all products
    getProductByNumber(DEFAULT_PRODUCT_NUMBER);
  }, []);

  const getProductByNumber = async number =>{
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${number}`);
    setProducts(response.data);
    setLoading(false);
  }

  const handleProductClick = (productId) => {
    // Fetch product by ID
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setSelectedProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error fetching product ${productId}:`, error);
        setLoading(false);
      });
  };

  const handleChangeInput = event =>{
    setNumber(event.target.value);
  }

  const handleGetProducts = () =>{
    getProductByNumber(number);
    setNumber(null)
  }

  const handleClearAllProducts = () => {
    setProducts([]);
    setSelectedProduct(null);
  }

  const handleDeleteProduct = productId => {
    const productsFilter = products.filter(x => x.id !== productId);
    setProducts(productsFilter);
  }

  return (
    <div>
      <h1 className="w-25 mr-3">Product List</h1>
      <input type='number' placeholder='input number of data' onChange={handleChangeInput}></input>
      <button onClick={() => handleGetProducts()}>Get number of products</button>
      <button onClick={() => handleClearAllProducts()}>Clear ALl</button>
      {selectedProduct && (
        <div>
          <h2>Selected Product</h2>
          <h2>Title: {selectedProduct.title}</h2>
          <p>Category: {selectedProduct.category}</p>
          <p>Name: {selectedProduct.description}</p>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {products.length > 0 ? 
            products.map(product => (
              <div>
            <li key={product.id} onClick={() => handleProductClick(product.id)}>
              {product.title}
            </li>
            <span onClick={() => handleDeleteProduct(product.id)}>delete {product.id}</span>
              </div>
            
          )) : <li style={{color: 'red'}}>No Data</li>}
        </ul>
      )}
    </div>
  );
};

export default AppContainer;
