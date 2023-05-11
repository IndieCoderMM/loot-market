import { Badge, Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import productData from '../data/products.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const products = productData['products'];
  const item = products.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'contain' }}
      />
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex flex-column">
          <span>{item.name}</span>
          <span style={{ fontSize: '.85rem' }} className="text-muted">
            {formatCurrency(item.price)}
          </span>
        </div>
        <Badge>x {quantity}</Badge>
        <span className="fw-bold">{formatCurrency(item.price * quantity)}</span>
        <Button variant="outline-secondary" onClick={() => removeFromCart(id)}>
          &times;
        </Button>
      </div>
    </Stack>
  );
}

export default CartItem;
