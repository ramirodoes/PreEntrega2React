import CartWidget from "../header/CartWidget/CartWidget"

const NavBar = ({ cartItems }) => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">La Escuelita de Sayago</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link btn btn-link">Inicio</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link">Otros Productos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link">Quiénes Somos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link">Contacto</button>
                        </li>
                    </ul>
                </div>
                <CartWidget quantity={totalQuantity} />
            </div>
        </nav>
    )
}

export default NavBar;