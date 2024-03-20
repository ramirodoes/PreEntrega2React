import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${product.id}`}>
        <img
          src={product.img}
          alt={product.name}
          className="item-image"
          style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className="item-details">
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <button>Ver detalles</button>
        </div>
      </Link>
    </div>
  );
};

export default Item;