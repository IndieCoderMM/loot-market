import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
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
        <Button
          style={{
            width: '3rem',
            height: '3rem',
            position: 'relative',
          }}
          className="d-flex align-items-center rounded-circle"
          variant="outline-primary"
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
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
