import { Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';
// TODO: Restyle the navbar

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
        <NavbarBs.Brand className="ms-2 fw-bold fs-3">gamezon</NavbarBs.Brand>
      </div>

      <NavbarBs.Collapse id="navbar">
        <Nav className="mx-auto text-center">
          <Nav.Link to="/" as={NavLink} className="text-uppercase fs-6">
            Home
          </Nav.Link>
          <Nav.Link
            to="/store/accessory"
            as={NavLink}
            className="text-uppercase fs-6"
          >
            Accessory
          </Nav.Link>
          <Nav.Link
            to="/store/hardware"
            as={NavLink}
            className="text-uppercase fs-6"
          >
            Hardware
          </Nav.Link>
          <Nav.Link
            to="/store/merchandise"
            as={NavLink}
            className="text-uppercase fs-6"
          >
            Merchandise
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="text-uppercase fs-6">
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
