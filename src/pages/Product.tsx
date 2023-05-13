import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import productData from '../data/products.json';
import { filterProductsByCategory } from '../utilities/filterProductsByCategory';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import StoreItem from '../components/StoreItem';

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
          <Col md={5}>
            <Image src={product.imgUrl} alt="Product" fluid rounded />
          </Col>
          <Col
            md={5}
            className="rounded d-flex justify-content-center flex-column"
          >
            <h2>{product.name}</h2>
            <p>{product.info}</p>
            <div>
              <div className="d-flex gap-1 ">
                <div className="d-flex align-items-center justify-content-center gap-1 bg-light">
                  <Button
                    onClick={() => decreaseQuantity(id)}
                    variant="outline-dark"
                    className="rounded-0 border-0"
                  >
                    <FaMinus />
                  </Button>
                  <div>
                    <span>{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseQuantity(id)}
                    variant="outline-dark"
                    className="rounded-0 border-0"
                  >
                    <FaPlus />
                  </Button>
                </div>
                {quantity === 0 ? (
                  <Button variant="danger" onClick={() => increaseQuantity(id)}>
                    + Add To Card
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
          <Col md={6}>
            <h4>Features</h4>
            <p>{product.feature}</p>
          </Col>
          {product.included[0] !== 'None' && (
            <Col md={6}>
              <h4>Included Items</h4>
              <ul>
                {product.included.map((i) => (
                  <li>1x {i}</li>
                ))}
              </ul>
            </Col>
          )}
        </Row>
      </section>

      <section className="my-4">
        <h3>You Might Also Like</h3>
        <Row>
          {similarProducts.map((item) => (
            <Col md={4}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Product;
