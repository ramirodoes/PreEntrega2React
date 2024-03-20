import React, { useState } from 'react';

const ItemDetail = ({ name, price, img, stock, category, description }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${name} - Cantidad: ${quantity}`);
  };

  if (stock <= 0) {
    return <p>Producto no disponible</p>;
  }

  return (
    <article className="item-detail">
      <header className="header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="item-detail-image" />
      </picture>
      <section className="item-detail-info">
        <h2>{name}</h2>
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </section>
    </article>
  );
};

export default ItemDetail;