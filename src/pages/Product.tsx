import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import productData from '../data/products.json';
import { filterProductsByCategory } from '../utilities/filterProductsByCategory';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import StoreItem from '../components/StoreItem';
import { formatCurrency } from '../utilities/formatCurrency';

function Product() {
  const { id: productId } = useParams();
  const id = Number(productId);
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const products = productData['products'];
  const product = products.find((item) => item.id === id);
  if (!product) return null;
  const similarProducts = filterProductsByCategory(
    products,
    product.category,
  ).filter((i) => i.id !== product.id);
  return (
    <Container>
      <section className="my-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Image src={product.imgUrl} alt="Product" fluid rounded />
          </Col>
          <Col
            md={6}
            className="rounded d-flex justify-content-center flex-column p-3"
          >
            <h2>{product.name}</h2>
            <p>{product.info}</p>
            <div className="my-3">
              <p className="fw-bold fs-3">{formatCurrency(product.price)}</p>
            </div>
            <div>
              <div className="d-flex gap-1 flex-md-row flex-column w-100">
                <div className="d-flex align-items-center justify-content-center gap-1 bg-light rounded">
                  <Button
                    onClick={() => decreaseQuantity(id)}
                    variant="outline-dark"
                    className="rounded border-0"
                  >
                    <FaMinus />
                  </Button>
                  <div>
                    <span>{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseQuantity(id)}
                    variant="outline-dark"
                    className="rounded border-0"
                  >
                    <FaPlus />
                  </Button>
                </div>
                {quantity === 0 ? (
                  <Button variant="danger" onClick={() => increaseQuantity(id)}>
                    Add To Cart
                  </Button>
                ) : (
                  <Button variant="warning" onClick={() => removeFromCart(id)}>
                    Remove
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="my-4">
        <Row>
          <Col md={6} className="p-2">
            <h4>Features</h4>
            <p>{product.feature}</p>
          </Col>
          {product.included[0] !== 'None' && (
            <Col md={6} className="d-flex justify-content-center">
              <div>
                <h4>Included Items</h4>
                <ul className="list-unstyled">
                  {product.included.map((i) => (
                    <li className="d-flex align-items-center">
                      <span className="text-warning fw-bold fs-3">
                        1&times;&nbsp;&nbsp;
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          )}
        </Row>
      </section>

      <section className="my-4">
        <h3 className="text-center mb-3">You May Also Like</h3>
        <Container>
          <Row className="align-items-stretch">
            {similarProducts.map((item) => (
              <Col md={4} className="p-2">
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Product;
