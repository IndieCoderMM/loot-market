import React from 'react';
import { useDataContext } from '../context/DataContext';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageBanner from '../components/PageBanner';
import { BsGrid3X3Gap, BsListUl } from 'react-icons/bs';

export default function Store() {
  const { products } = useDataContext();

  const totalProducts = products.length * 3;
  return (
    <>
      <PageBanner />
      <div
        className="px-2 max-width-container d-flex flex-column flex-sm-row justify-content-between align-items-sm-center border-bottom border-light py-3 pt-sm-5"
        style={{
          fontSize: '0.9rem',
        }}
      >
        <p className="fs-6">
          Showing {totalProducts} of {totalProducts} results
        </p>
        <div className="d-flex align-items-center gap-1">
          <select className="form-select fs-6 me-3">
            <option value="">Sort by: Latest Arrival</option>
            <option value="">Sort by: Price (low to high)</option>
            <option value="">Sort by: Price (high to low)</option>
            <option value="">Sort by: Popularity</option>
          </select>

          <div className="d-flex gap-1 gap-sm-3 align-items-center border-start border-light text-dark ps-2 ps-sm-3">
            <button
              type="button"
              className="btn btn-outline-none fs-3 p-1 text-warning"
            >
              <span className="visually-hidden">
                Display products in a grid
              </span>
              <BsGrid3X3Gap />
            </button>

            <button
              type="button"
              className="btn btn-outline-none fs-2 p-1 text-secondary"
            >
              <span className="visually-hidden">
                Display products in a list
              </span>
              <BsListUl />
            </button>
          </div>
        </div>
      </div>

      <Container>
        <Row className="my-5">
          {products?.map((product) => (
            <React.Fragment key={product.id}>
              <Col md={6} lg={4} xl={3} className="mb-4">
                <ProductCard
                  key={product.id}
                  product={product}
                  imageIndex={0}
                />
              </Col>
              <Col md={6} lg={4} xl={3} className="mb-4">
                <ProductCard
                  key={product.id}
                  product={product}
                  imageIndex={1}
                />
              </Col>
              <Col md={6} lg={4} xl={3} className="mb-4">
                <ProductCard
                  key={product.id}
                  product={product}
                  imageIndex={2}
                />
              </Col>
              <Col md={6} lg={4} xl={3} className="mb-4">
                <ProductCard
                  key={product.id}
                  product={product}
                  imageIndex={3}
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}
