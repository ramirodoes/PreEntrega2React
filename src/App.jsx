import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter(item => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} /> {}
          <Route path='*' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;