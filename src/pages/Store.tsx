import Container from 'react-bootstrap/Container';
import { useDataContext } from '../context/DataContext';
import ProductCard from '../components/ProductCard';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Store() {
  const { products } = useDataContext();
  return (
    <Container>
      <h1 className="text-center fw-bolder text-capitalize">All Products</h1>
      <Row className="my-5">
        {products?.map((product) => (
          <React.Fragment key={product.id}>
            <Col md={6} lg={4} xl={3} className="mb-4">
              <ProductCard key={product.id} product={product} imageIndex={0} />
            </Col>
            <Col md={6} lg={4} xl={3} className="mb-4">
              <ProductCard key={product.id} product={product} imageIndex={1} />
            </Col>
            <Col md={6} lg={4} xl={3} className="mb-4">
              <ProductCard key={product.id} product={product} imageIndex={2} />
            </Col>
            <Col md={6} lg={4} xl={3} className="mb-4">
              <ProductCard key={product.id} product={product} imageIndex={3} />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}
