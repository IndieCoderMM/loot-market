import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatCurrency';
import { useParams } from 'react-router-dom';
import { urlFor } from '../../lib/sanity.client';
import Rating from './Rating';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useDataContext } from '../../context/DataContext';
import ProductCard from '../../components/ProductCard';
import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useDataContext();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();

  const product = products.find((p) => p.slug === slug);
  const quantity = getItemQuantity(product?.id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col
            lg={6}
            className="p-1 d-flex flex-column gap-3 align-items-center "
          >
            {product?.images ? (
              <Image
                src={urlFor(product?.images[selectedIndex]).url()}
                alt={product?.name}
                width={500}
                height={500}
                className="product-detail-image"
              />
            ) : null}
            <div className="d-flex flex-wrap">
              {product?.images?.map((image, index) => (
                <div
                  key={index}
                  className={`rounded me-1 border border-2 overflow-hidden ${
                    index === selectedIndex ? 'border-danger' : 'border-light'
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => setSelectedIndex(index)}
                  role="button"
                >
                  <img
                    src={urlFor(image).url()}
                    alt={product?.name}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </Col>
          <Col
            lg={6}
            className="rounded d-flex justify-content-center flex-column p-3 gap--sm-3 gap-1"
          >
            <h2>{product?.name}</h2>
            <Rating rating={4} total={124} />
            <div>
              <h3 className="fw-bold fs-5">Details</h3>
              <p>{product?.description}</p>
            </div>
            <div className="my-1">
              <span
                className="text-secondary fs-6 fw-bold opacity-75"
                style={{
                  textDecoration: 'line-through',
                }}
              >
                {formatCurrency((product?.price || 0) * 1.2)}
              </span>
              <p className="fw-bold fs-2 text-success">
                {formatCurrency(product?.price || 0)}
              </p>
            </div>
            <div>
              <div className="d-flex gap-1 w-100 align-items-center">
                <p className="text-secondary fs-4 fw-bold p-0 m-0">Quantity:</p>
                <div className="d-flex justify-content-center gap-1 bg-light rounded fs-4">
                  <Button
                    onClick={() => decreaseQuantity(product?.id || '')}
                    variant="outline-dark"
                    className="rounded border-0"
                  >
                    <span className="visually-hidden">Decrease quantity</span>
                    <FaMinus />
                  </Button>
                  <div className="px-3 py-2">
                    <span className="fw-bold">{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseQuantity(product?.id || '')}
                    variant="outline-dark"
                    className="rounded border-0"
                  >
                    <span className="visually-hidden">Increase quantity</span>
                    <FaPlus />
                  </Button>
                </div>
              </div>
              <div className="d-flex my-3 align-items-center gap-2">
                <Button size="lg" variant="danger">
                  Buy Now
                </Button>
                {quantity === 0 ? (
                  <Button
                    size="lg"
                    variant="outline-dark"
                    onClick={() => increaseQuantity(product?.id || '')}
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline-dark"
                    onClick={() => removeFromCart(product?.id || '')}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="my-2 my-sm-5">
        <h2 className="text-center fw-bold fs-2">You May Also Like</h2>
        <section className="products-carousel">
          <div className="products-carousel__container products-carousel__track">
            {products?.length > 0 &&
              products.map((product) => (
                <React.Fragment key={product.id}>
                  <ProductCard
                    key={product.id + '1'}
                    product={product}
                    imageIndex={1}
                  />
                  <ProductCard
                    key={product.id + '2'}
                    product={product}
                    imageIndex={2}
                  />
                  <ProductCard
                    key={product.id + '3'}
                    product={product}
                    imageIndex={3}
                  />
                </React.Fragment>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
