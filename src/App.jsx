import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetailPage from './components/ProductDetailPage';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

const AppContent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ProductDetailPage />} />
        <Route path='*' element={<ItemListContainer />} />
      </Routes>
    </>
  );
};

export default App;