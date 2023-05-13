import { Col, Container, Image, Row } from 'react-bootstrap';
import FeaturedLinksSection from '../components/FeaturedLinksSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <Container>
      <section>
        <Container>
          <Row className="my-5">
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image src="/images/gaming_setup.jpg" alt="Gaming setup" fluid />
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center">
              <div>
                <h1>About Us</h1>
                <p>
                  At our company, we're passionate about providing the best
                  gaming gear to enhance your gaming experience. Our carefully
                  curated collection includes cutting-edge gaming keyboards,
                  high-precision mice, comfortable gaming chairs, powerful
                  graphics cards, and much more.
                </p>
                <p>
                  We source our products from renowned brands that prioritize
                  quality and innovation, ensuring that you get the best gaming
                  gear available in the market. Whether you're a professional
                  gamer or a casual player, we've got you covered.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-2">
        <Container className="p-2">
          <Row>
            <Col md={6}>
              <h3>Contact Information</h3>
              <p>
                We'd love to hear from you. Get in touch with us using the
                contact information below or by filling out the form.
              </p>
              <p>
                <strong>Address:</strong> 123 Street, Chauk, Magway, Myanmar
              </p>
              <p>
                <strong>Phone:</strong> +96 923-456-7890
              </p>
              <p>
                <strong>Email:</strong> gamezon@realwebsite.com
              </p>
            </Col>
            <Col md={6}>
              <h3>Contact Form</h3>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-2">
        <h2 className="text-center my-5">Explore Our Products</h2>
        <FeaturedLinksSection />
      </section>
    </Container>
  );
}
