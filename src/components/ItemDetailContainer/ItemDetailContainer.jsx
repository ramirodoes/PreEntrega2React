import React, { useState, useEffect } from 'react';
import { getProductById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ itemId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;