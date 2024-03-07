const products = [
    { id: 1, name: 'Camiseta', price: 1200, img: 'ecommerce/img/camisetaracing.png', stock: 25, description: 'Camiseta oficial del Club'},
    { id: 2, name: 'Short', price: 800, img: 'ecommerce/img/shortracing.png', stock: 20, description: 'Short oficial del Club'},
    { id: 3, name: 'Chomba', price: 1000, img: 'ecommerce/img/chombaracing.png', stock: 15, description: 'Chomba oficial del Club'},
    { id: 4, name: 'Campera', price: 2200, img: 'ecommerce/img/camperaracing.png', stock: 5, description: 'Campera oficial del Club'},
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
            }, 500)
        })
    }