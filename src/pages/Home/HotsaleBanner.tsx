import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import { Banner } from '../../lib/sanity.query';
import { urlFor } from '../../lib/sanity.client';

const HotsaleBanner = ({ banner }: { banner: Banner }) => {
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
    <div className="hotsale-banner">
      <Container fluid>
        <Row>
          <Col md={5}>
            <div className="hotsale-banner__left">
              <Badge bg="warning" className="fs-2">
                {discount}
              </Badge>
              <h3>{largeText1}</h3>
              <h3>{largeText2}</h3>
              <p>{saleTime}</p>
            </div>
          </Col>
          <div className="hotsale-banner__image">
            <img
              src={image ? urlFor(image).url() : ''}
              alt={product}
              width={400}
              height={400}
            />
          </div>
          <Col
            md={{
              span: 4,
              offset: 3,
            }}
          >
            <div className="hotsale-banner__right">
              <Badge bg="dark" className="p-2">
                {smallText}
              </Badge>
              <h3 className="fs-1 fw-bolder">{midText}</h3>
              <p>{desc}</p>
              <Link
                to={`/store/${product}`}
                className="btn btn-outline-light px-4 py-2 fs-4 fw-bolder text-uppercase"
              >
                {buttonText}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotsaleBanner;
