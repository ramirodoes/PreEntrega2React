import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ product, initial, stock }) => {
  const [count, setCount] = useState(initial);
  const { addItem } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, count)
    } else {
      console.error('Product is not defined');
    }
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;