import {Link, NavLink} from "react"
import logo from "../images/logo512.png"
import carrito from "../images/carrito.png"

export default function NavBar() {
    return (
        <header>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <NavLink to='/category/samsung'>
                Samsung
            </NavLink>
            <NavLink to='/category/apple'>
                Apple
            </NavLink>
            <NavLink to='/category/xioami'>
                Xioami
            </NavLink>
            <Link to="/carrito"><img src={carrito} alt="carrito"/></Link>
        </header>
    )
}