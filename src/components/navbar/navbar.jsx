import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">La Escuelita de Sayago</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/nosotros'>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contacto'>Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to='/'>
            <h3>Inicio</h3>
          </Link>
          <div className='Categories'>
            <Link to="/category/Ropa oficial">Ropa oficial</Link>
            <br></br>
            <Link to="/category/Ropa entrenamiento">Ropa entrenamiento</Link>
          </div>
        </div>
        <div className="cart-items">
          <p>Total en carrito: {totalQuantity}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;