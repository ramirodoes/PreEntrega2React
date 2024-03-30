import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, price, img, stock, category, description }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const item = {
    id, name, price
  };

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
        {quantity === 0 ? (
          <div>
            <button onClick={handleIncrement} className="small-btn">+</button>
            <span>{quantity}</span>
            <button onClick={handleDecrement} className="small-btn">-</button>
            <button onClick={handleAddToCart} className="add-to-cart-btn">Agregar al carrito</button>
          </div>
        ) : (
          <div className="item-buttons">
            <ItemCount product={item} initial={quantity} stock={stock} onAdd={handleAddToCart}/>
            <Link to='/cart' className='finish-purchase-btn'>Terminar Compra</Link>
          </div>
        )}
      </section>
    </article>
  );
};

export default ItemDetail;