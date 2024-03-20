const products = [
  { id: 1, name: 'Camiseta', price: 1200, img: '../img/camisetaracing.png', stock: 25, category: 'Ropa oficial', description: 'Camiseta oficial del Club' },
  { id: 2, name: 'Short', price: 800, img: '../img/shortracing.png', stock: 20, category: 'Ropa oficial', description: 'Short oficial del Club' },
  { id: 3, name: 'Chomba', price: 1000, img: '../img/chombaracing.png', stock: 15, category: 'Ropa entrenamiento', description: 'Chomba oficial del Club' },
  { id: 4, name: 'Campera', price: 2200, img: '../img/camperaracing.png', stock: 5, category: 'Ropa entrenamiento', description: 'Campera oficial del Club' },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 500);
  });
};