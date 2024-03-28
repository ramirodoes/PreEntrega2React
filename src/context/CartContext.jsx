import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += quantity;
    } else {
      updatedCartItems.push({ ...product, quantity });
    }

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const contextValue = {
    cartItems,
    totalQuantity,
    total,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};