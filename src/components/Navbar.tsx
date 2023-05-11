import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Navbar() {
  const { openCart, totalQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <div className="d-flex gap-1 align-items-center">
          <h1>Gamezo</h1>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
        </div>
        {totalQuantity > 0 && (
          <Button
            style={{
              width: '3rem',
              height: '3rem',
              position: 'relative',
            }}
            className="d-flex align-items-center rounded-circle"
            variant="outline-primary"
            onClick={openCart}
          >
            <FaShoppingCart style={{ fontSize: '2rem' }} />
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
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
