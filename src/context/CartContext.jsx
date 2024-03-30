import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    let actualCart = cart
    if (!isInCart(item.id)) {
      actualCart.push({...item, quantity})
      setCart(actualCart);  
    } else {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity }
        }
        return cartItem
      })
      setCart(updatedCart)
    }
    updateTotal(actualCart)
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    updateTotal();
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0)
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const updateTotal = () => {
    const newTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) 
    setTotal(newTotal)
  };

  return (
    <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;