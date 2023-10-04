import { Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Navbar() {
  const { openCart, totalQuantity } = useShoppingCart();
  return (
    <NavbarBs
      sticky="top"
      variant="light"
      className="px-1 px-sm-3 bg-white"
      expand="lg"
    >
      <div className="d-flex align-items-center">
        <NavbarBs.Toggle aria-controls="navbar" />
        <NavbarBs.Brand className="ms-2 fw-bold fs-3">gamezon</NavbarBs.Brand>
      </div>

      <NavbarBs.Collapse id="navbar">
        <Nav className="ms-auto text-center fs-6 nav-mr-lg">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
          <Nav.Link to="/account" as={NavLink} className="ms-sm-3">
            <FaUserAlt className="me-2" />
            Login / Register
          </Nav.Link>
        </Nav>
      </NavbarBs.Collapse>

      <Button
        style={{
          width: '3rem',
          height: '3rem',
          top: '.5rem',
          right: '.5rem',
        }}
        className="d-flex align-items-center justify-content-center rounded-circle position-absolute"
        variant="outline-dark"
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
