import { Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { Link } from 'react-router-dom';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card className="shadow" style={{ border: 'none' }}>
      <Card.Img
        src={imgUrl}
        variant="top"
        height={250}
        style={{ objectFit: 'contain', padding: '.5rem' }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="d-flex justify-content-center pt-3">
          <Link to={`/product/${id}`} className="btn btn-danger">
            See Product
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
