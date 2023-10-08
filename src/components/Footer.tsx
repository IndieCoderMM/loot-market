import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-black text-light py-3 fs-5 py-sm-5">
      <Container>
        <Navbar variant="dark d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <Navbar.Brand className="fw-bold fs-2">gamezon</Navbar.Brand>
          <Nav className="ms-md-auto d-flex flex-wrap gap-1">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Shop Now
            </Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col md={6}>
            <p className="">
              Gamezon is your ultimate destination for gaming accessories,
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
          &copy; {new Date().getFullYear()} gamezon. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
