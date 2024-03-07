import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemName) => {
    const updatedCartItems = cartItems.concat({ name: itemName, quantity: 1 });
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter(item => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<ItemListContainer addToCart={addToCart} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer addToCart={addToCart} />} />
          <Route path='/item/:itemId' element={<ItemListContainer addToCart={addToCart} />} />
          <Route path='*' element={<ItemListContainer addToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;