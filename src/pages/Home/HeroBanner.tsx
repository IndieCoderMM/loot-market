import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Banner } from '../../lib/sanity.query';
import { urlFor } from '../../lib/sanity.client';

const HeroBanner = ({ banner }: { banner: Banner }) => {
  return (
    <div className="hero ">
      <Container className="hero__container py-5 text-white">
        <h2 className="hero__watermark">{banner?.smallText}</h2>
        <Row>
          <Col lg={6} className="">
            <div className="">
              <Image
                src={banner?.image ? urlFor(banner.image).url() : ''}
                alt={banner?.product}
                width={500}
                height={500}
                className="hero__image w-100 h-auto object-fit-contain"
              />
            </div>
            <h4 className="">{banner?.largeText2}</h4>
            <p className="fs-5 d-none d-sm-inline">{banner?.desc}</p>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center "
          >
            <div className="d-flex flex-column gap-3 justify-content-center align-items-start">
              <h1 className="hero__product-name">{banner?.product}</h1>
              <h3>{banner?.largeText1}</h3>

              <Link
                to="/store"
                className="btn btn-outline-light  px-4 py-2 fs-3 rounded-pill"
              >
                {banner?.buttonText}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
