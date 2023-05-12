import { Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Navbar() {
  const { openCart, totalQuantity } = useShoppingCart();
  return (
    <NavbarBs
      sticky="top"
      variant="dark"
      className="bg-dark text-white shadow-sm"
      style={{ position: 'relative' }}
      expand="lg"
    >
      <div className="d-flex align-items-center">
        <NavbarBs.Toggle aria-controls="navbar" />
        <NavbarBs.Brand className="ms-2 fw-bold fs-4">Gamezo</NavbarBs.Brand>
      </div>

      <NavbarBs.Collapse id="navbar">
        <Nav className="mx-auto text-center">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store/accessory" as={NavLink}>
            Accessory
          </Nav.Link>
          <Nav.Link to="/store/hardware" as={NavLink}>
            Hardware
          </Nav.Link>
          <Nav.Link to="/store/merchandise" as={NavLink}>
            Merchandise
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </NavbarBs.Collapse>

      <Button
        style={{
          width: '3rem',
          height: '3rem',
          position: 'absolute',
          right: '0.5rem',
          top: '0.5rem',
        }}
        className="d-flex align-items-center rounded-circle"
        variant="outline-light"
        onClick={openCart}
      >
        <FaShoppingCart style={{ fontSize: '2rem' }} />
        {totalQuantity > 0 && (
          <div
            className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
            style={{
              width: '1.4rem',
              height: '1.4rem',
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(25%, -25%)',
            }}
          >
            {totalQuantity}
          </div>
        )}
      </Button>
    </NavbarBs>
  );
}
