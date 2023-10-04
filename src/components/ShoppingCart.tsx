import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { formatCurrency } from '../utils/formatCurrency';
import { TiShoppingCart } from 'react-icons/ti';
import Summary from './Summary';
import { useDataContext } from '../context/DataContext';

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { cartItems, closeCart } = useShoppingCart();
  const { products } = useDataContext();

  const totalCost = cartItems.reduce((total, cartItem) => {
    const item = products?.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const shippingCost = 50;
  const vatCost = totalCost * 0.2;
  const grandTotal = totalCost + vatCost + shippingCost;
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-uppercase fw-bold">
          Shopping Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <TiShoppingCart style={{ fontSize: '3rem' }} />
            <h2 className="fs-5">Your Cart is Empty</h2>
            <p>Start exploring our amazing products and fill your cart!</p>
            <Button variant="outline-dark" href="/store">
              Browse Products
            </Button>
          </div>
        ) : (
          <Stack gap={2} className="p-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Summary title="Total" value={formatCurrency(totalCost)} />
            <Summary title="Shipping" value={formatCurrency(shippingCost)} />
            <Summary title="VAT (included)" value={formatCurrency(vatCost)} />
            <Summary
              title="Grand total"
              value={formatCurrency(grandTotal)}
              className="mt-1"
              colored
            />

            <Button variant="warning" className="rounded-0 fw-bold">
              Checkout
            </Button>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
