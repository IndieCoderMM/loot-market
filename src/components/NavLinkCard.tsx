import { Card } from 'react-bootstrap';
import { TbArrowBigRightLinesFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

type NavLinkCardProps = {
  title: string;
  path: string;
  imgUrl: string;
};

export default function NavLinkCard({ title, path, imgUrl }: NavLinkCardProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: '200px', objectFit: 'contain' }}
        className="p-1"
      />
      <Card.Body className="text-center bg-light">
        <Card.Title>{title}</Card.Title>
        <Link to={path} className="btn btn-outline-danger">
          Shop Now <TbArrowBigRightLinesFilled />
        </Link>
      </Card.Body>
    </Card>
  );
}
