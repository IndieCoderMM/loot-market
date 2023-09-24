import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import productData from '../data/products.json';
import { formatCurrency } from '../utils/formatCurrency';
import { BsCartX } from 'react-icons/bs';

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
    <Stack direction="horizontal" gap={2} className="p-2 rounded shadow-sm">
      <img
        src={item.imgUrl}
        style={{ width: '70px', height: '70px', objectFit: 'contain' }}
        className="rounded border p-1"
      />
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex flex-column">
          <span className="fw-bold fs-6">{item.name}</span>
          <span style={{ fontSize: '.85rem' }} className="text-muted">
            {formatCurrency(item.price)}
          </span>
        </div>
        <div className="text-muted fw-bold">&times;&nbsp;{quantity}</div>
      </div>
      <Button
        variant="outline-danger"
        onClick={() => removeFromCart(id)}
        className="btn-sm"
      >
        <BsCartX style={{ fontSize: '1.1rem' }} />
      </Button>
    </Stack>
  );
}

export default CartItem;
