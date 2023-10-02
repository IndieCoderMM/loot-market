import { Link } from 'react-router-dom';
import { urlFor } from '../lib/sanity.client';
import { Product } from '../lib/sanity.query';

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
        to={`/store/${product.slug}`}
        className="product-card__link"
        aria-label={product.name}
      />
      <img
        className="product-card__image"
        src={urlFor(product.images[imageIndex]).url()}
        alt={product.name}
        width={300}
        height={300}
      />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">${product.price}</p>
    </div>
  );
};

export default ProductCard;
