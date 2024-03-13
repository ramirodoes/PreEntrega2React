import React from 'react';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="item-detail">
      <img
        src={img}
        alt={name}
        className="item-detail-image"
      />
      <div className="item-detail-info">
        <h2>{name}</h2>
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
        <button>Ver detalles</button>
      </div>
    </div>
  );
};

export default ItemDetail;