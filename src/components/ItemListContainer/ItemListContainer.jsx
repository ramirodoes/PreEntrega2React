import React, { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock';
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="product-section">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;