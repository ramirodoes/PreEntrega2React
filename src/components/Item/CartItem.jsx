import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <img src={item.img} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
            </div>
        </div>
    );
};

export default CartItem;