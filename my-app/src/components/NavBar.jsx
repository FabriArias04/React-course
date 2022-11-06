import {Link, NavLink} from "react-router-dom"
import logo from "../images/logo512.png"
import carrito from "../images/carrito.png"

export default function NavBar() {
    return (
        <header className="header-nav">
            <Link to="/"><img src={logo} alt="logo" className="logo-react"/></Link>
            <NavLink to='/category/samsung' className="navlink-nav">
                Samsung
            </NavLink>
            <NavLink to='/category/apple' className="navlink-nav">
                Apple
            </NavLink>
            <NavLink to='/category/xioami' className="navlink-nav">
                Xioami
            </NavLink>
            <Link to="/cart"><img src={carrito} alt="carrito" className="carrito-nav"/>
            </Link>
        </header>
    )
}