import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, count); // Corregir aquí para pasar el producto al método addToCart
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;