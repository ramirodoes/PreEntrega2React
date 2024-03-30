import './Cart.css';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext.jsx';
import CartItem from '../Item/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay elementos agregados</h1>
                <Link to='/' className='Option'>Productos </Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map((item, index) => (
                <div key={index}>
                    <CartItem item={item} />
                </div>
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'> Checkout </Link>
        </div>
    )
}

export default Cart;