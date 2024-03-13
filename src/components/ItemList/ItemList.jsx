import React, { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;