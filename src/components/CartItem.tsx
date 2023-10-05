import { Button, Image } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { BsCartX } from 'react-icons/bs';
import { useDataContext } from '../context/DataContext';
import { urlFor } from '../lib/sanity.client';
import { FaMinus, FaPlus } from 'react-icons/fa';

type CartItemProps = {
  id: string;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { decreaseQuantity, increaseQuantity, removeFromCart } =
    useShoppingCart();
  const { products } = useDataContext();

  const item = products?.find((i) => i.id === id);

  if (!item) return null;
  return (
    <div className="p-2 rounded border-bottom border-light d-flex align-items-start gap-2">
      <Image
        src={urlFor(item.images[0]).url()}
        alt={item.name}
        width={80}
        height={80}
        className="rounded border p-1"
      />
      <div className="d-flex justify-content-between flex-column gap-1 align-items-start w-100">
        <div className="d-flex justify-content-between align-items-start">
          <span
            style={{
              fontSize: '.85rem',
            }}
          >
            {item.name}
          </span>
          <span style={{ fontSize: '.9em' }} className="text-success">
            {formatCurrency(item.price)}
          </span>
        </div>

        <div className="d-flex gap-1 w-100 align-items-center justify-content-between">
          <div className="d-flex justify-content-center gap-1 bg-light rounded">
            <Button
              onClick={() => decreaseQuantity(item?.id || '')}
              variant="outline-dark"
              className="rounded border-0"
            >
              <span className="visually-hidden">Decrease quantity</span>
              <FaMinus />
            </Button>
            <div className="px-2 py-1">
              <span className="fw-semibold">{quantity}</span>
            </div>
            <Button
              onClick={() => increaseQuantity(item?.id || '')}
              variant="outline-dark"
              className="rounded border-0"
            >
              <span className="visually-hidden">Increase quantity</span>
              <FaPlus />
            </Button>
          </div>

          <Button
            variant="outline-danger"
            onClick={() => removeFromCart(id)}
            size="sm"
            className="d-flex align-items-center gap-1 rounded-0"
          >
            <BsCartX style={{ fontSize: '1.1rem' }} />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
