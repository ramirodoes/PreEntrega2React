import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetailPage from './components/ProductDetailPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

const AppContent = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter(item => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <NavBar cartItems={cartItems} onCategorySelect={handleCategorySelect} />
      <Routes>
        <Route path='/' element={<ItemListContainer selectedCategory={selectedCategory} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer selectedCategory={selectedCategory} />} />
        <Route path='/item/:itemId' element={<ProductDetailPage />} />
        <Route path='*' element={<ItemListContainer selectedCategory={selectedCategory} />} />
      </Routes>
    </>
  );
};

export default App;