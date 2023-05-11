import { Col, Row } from 'react-bootstrap';
import productData from '../data/products.json';
import StoreItem from '../components/StoreItem';

export default function Store() {
  const products = productData['products'];
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3}>
        {products.map((item) => (
          <Col key={item.id} className="p-2">
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
