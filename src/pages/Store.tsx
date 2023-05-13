import Container from 'react-bootstrap/Container';
import productData from '../data/products.json';
import StoreItem from '../components/StoreItem';

export default function Store() {
  const products = productData['products'];
  return (
    <Container>
      {products.map((product, index) => (
        <StoreItem
          key={product.id}
          product={product}
          isAlternate={index % 2 !== 0}
        />
      ))}
    </Container>
  );
}
