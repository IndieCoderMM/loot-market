import Container from 'react-bootstrap/Container';
import productData from '../data/products.json';
import StoreItem from '../components/StoreItem';
import { filterProductsByCategory } from '../utilities/filterProductsByCategory';
import { useParams } from 'react-router-dom';

function Category() {
  const { category } = useParams();
  const products = filterProductsByCategory(
    productData['products'],
    category || '',
  );
  return (
    <Container>
      <h1 className="text-center text-muted text-capitalize">
        {category} Products
      </h1>
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

export default Category;
