import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import NavLinkCard from '../components/NavLinkCard';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className="p-0" fluid>
      <section
        className="bg-dark text-white hero-section d-flex flex-column justify-content-center"
        style={{ backgroundImage: 'url(/images/hero_background.jpg)' }}
      >
        <Container>
          <Row>
            <Col md={6}>
              <h1 style={{ fontSize: '3rem' }}>
                <span className="text-warning d-inline-flex align-items-center">
                  Level Up <TbArrowBigUpLinesFilled />
                </span>{' '}
                Your Gaming Experience
              </h1>
              <p>
                Discover the ultimate collection of gaming accessories,
                hardware, and merchandise.
              </p>
              <Link to="/store" className="btn btn-lg btn-danger rounded-0">
                Explore Now
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <NavLinkCard
                title="Accessory"
                path="/store/accessory"
                imgUrl="/images/gaming_headset.jpg"
              />
            </Col>
            <Col md={4} className="mb-4">
              <NavLinkCard
                title="Hardware"
                path="/store/hardware"
                imgUrl="/images/gaming_laptop.jpg"
              />
            </Col>
            <Col md={4} className="mb-4">
              <NavLinkCard
                title="Merchandise"
                path="/store/merchandise"
                imgUrl="/images/gaming_hoodie.jpg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6} className="order-md-2">
              <Image src="/images/gaming_setup.jpg" fluid />
            </Col>
            <Col md={6} className="order-md-1">
              <h2 className="mb-4">
                Take Your{' '}
                <span className="text-warning">Gaming Experience</span> to the
                Next Level
              </h2>
              <p>
                Our carefully curated collection includes cutting-edge gaming
                keyboards, high-precision mice, comfortable gaming chairs,
                powerful graphics cards, and much more. We source our products
                from renowned brands that prioritize quality and innovation,
                ensuring that you get the best gaming gear available in the
                market.
              </p>
              <Button variant="danger">Explore Our Collection</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}
