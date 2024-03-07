import cart from './assets/cart.svg'

const CartWidget = ({ quantity }) => {
    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            {quantity}
        </div>
    )
}

export default CartWidget;