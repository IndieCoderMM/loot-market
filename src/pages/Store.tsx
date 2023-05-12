import { Col, Row } from 'react-bootstrap';
import productData from '../data/products.json';
import StoreItem from '../components/StoreItem';
import { filterProductsByCategory } from '../utilities/filterProductsByCategory';
import { useParams } from 'react-router-dom';

export default function Store() {
  const { category } = useParams();
  const products = filterProductsByCategory(
    productData['products'],
    category || '',
  );
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
