import { Banner } from '../lib/sanity.query';
import { urlFor } from '../lib/sanity.client';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const FooterBanner = ({ banner }: { banner: Banner }) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    image,
    product,
    midText,
    buttonText,
    desc,
  } = banner || {};

  return (
    <div className="footer-banner">
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="footer-banner__left">
              <p>{discount}</p>
              <h3>{largeText1}</h3>
              <h3>{largeText2}</h3>
              <p>{saleTime}</p>
            </div>
          </Col>
          <Col
            md={{
              span: 4,
              offset: 2,
            }}
          >
            <div className="footer-banner__right">
              <p>{smallText}</p>
              <h3>{midText}</h3>
              <p>{desc}</p>
              <Link
                to={`/store/${product}`}
                className="btn btn-outline-light px-4 py-2 fs-3"
              >
                {buttonText}
              </Link>
            </div>
          </Col>
        </Row>
        <div className="footer-banner__image">
          <img
            src={image ? urlFor(image).url() : ''}
            alt={product}
            width={400}
            height={400}
          />
        </div>
      </Container>
    </div>
  );
};

export default FooterBanner;
