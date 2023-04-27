import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h2>Cava Selecta</h2>
            </div>
            <div className="menu-container">
                <ul>
                    <li className="menu-item"><a href="#!">Home</a></li>
                    <li className="menu-item"><a href="#!">Vinos</a></li>
                    <li className="menu-item"><a href="#!">Espumantes</a></li>
                    <li className="menu-item"><a href="#!">Contacto</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}