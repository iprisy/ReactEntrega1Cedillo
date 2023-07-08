import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../Carrito/Carrito';

function NavBar () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">T-Shirts Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Camisetas Rock-n-roll
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Camisetas Cutty
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Carrito rutaImagen="https://static.vecteezy.com/system/resources/previews/000/498/498/original/vector-shopping-cart-icon-design.jpg" />
    </Navbar>
  );
}

export default NavBar;
