import { CartWidget } from "./CartWidget"
import Logo from '../assets/images/cava-selecta-logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar expand="sm" variant="dark" style={{backgroundColor: "rgb(119, 23, 49)"}}>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}><img src={ Logo } alt="Cava Selecta logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink>Vinos</NavLink>
                        <NavLink>Espumantes</NavLink>
                        <NavLink>Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}