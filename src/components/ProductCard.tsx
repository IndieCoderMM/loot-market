import { Link } from 'react-router-dom';
import { urlFor } from '../lib/sanity.client';
import { Product } from '../lib/sanity.query';
import Image from 'react-bootstrap/Image';

const ProductCard = ({
  product,
  imageIndex,
}: {
  product: Product;
  imageIndex: number;
}) => {
  return (
    <div className="product-card">
      <Link
        to={`/product/${product.slug}`}
        className="product-card__link"
        aria-label={product.name}
      >
        View Product
      </Link>
      <Image
        className="product-card__image"
        src={urlFor(product.images[imageIndex]).url()}
        alt={product.name}
        width={300}
        height={300}
      />
      <p className="product-card__name">{product.name}</p>
      <p className="product-card__price">
        <span>${(product.price * 1.5).toFixed(2)}</span>${product.price}
      </p>
    </div>
  );
};

export default ProductCard;
