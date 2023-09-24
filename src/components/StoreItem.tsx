import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { formatCurrency } from '../utils/formatCurrency';

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  imgUrl: string;
}

type StoreItemProps = {
  product: Product;
  isAlternate: boolean;
};

function StoreItem({ product, isAlternate }: StoreItemProps) {
  const { id, name, info, imgUrl, price } = product;
  return (
    <Container className="p-1 p-md-5">
      <Card className="p-2">
        <Row>
          <Col md={6} className={isAlternate ? 'order-md-2' : ''}>
            <Image src={imgUrl} alt={name} fluid />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Card.Body className="d-flex flex-column justify-content-center p-5">
              <h2>{name}</h2>
              <p>{info}</p>
              <p className="text-muted fw-bold">{formatCurrency(price)}</p>
              <Button
                variant="danger"
                href={`/product/${id}`}
                className="btn-lg align-self-start"
              >
                View Product
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default StoreItem;
