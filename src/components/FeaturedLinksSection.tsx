import { Col, Container, Row } from 'react-bootstrap';
import NavLinkCard from './NavLinkCard';

function FeaturedLinksSection() {
  return (
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
  );
}

export default FeaturedLinksSection;
