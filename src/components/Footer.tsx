import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Navbar variant="dark d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <Navbar.Brand className="fw-bold fs-2">gamezo</Navbar.Brand>
          <Nav className="ms-md-auto d-flex flex-wrap">
            <Nav.Link to="/" as={NavLink} className="text-uppercase fs-6">
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink} className="text-uppercase fs-6">
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink} className="text-uppercase fs-6">
              About
            </Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col md={6}>
            <p>
              Gamezo is your ultimate destination for gaming accessories,
              hardware, and merchandise. We strive to provide gamers with
              top-quality products at competitive prices. Explore our wide range
              of offerings and elevate your gaming experience today!
            </p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled d-flex gap-3 justify-content-center justify-content-md-end  h-100 align-items-end">
              <li>
                <a href="https://www.facebook.com">
                  <AiFillFacebook className="link-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <AiOutlineTwitter className="link-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <AiOutlineInstagram className="link-icon" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} gamezo. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
