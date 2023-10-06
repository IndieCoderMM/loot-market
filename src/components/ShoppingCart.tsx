import { Button, Offcanvas } from 'react-bootstrap';
import { AiOutlineShopping } from 'react-icons/ai';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { formatCurrency } from '../utils/formatCurrency';
import Summary from './Summary';
import { useDataContext } from '../context/DataContext';
import getStripe from '../lib/getStripe';
import toast from 'react-hot-toast';

type ShoppingCartProps = {
  isOpen: boolean;
};

const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL || 'http://127.0.0.1:5173';

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

  const productsInCart = cartItems.map((item) => {
    const product = products?.find((i) => i.id === item.id);

    return {
      // price_data: {
      //   currency: 'usd',
      //   product_data: {
      //     name: product?.name,
      //   },
      //   unit_amount: (product?.price || 0) * 100,
      // },
      price: product?.priceId,
      quantity: item.quantity,
    };
  });

  const handleCheckout = async () => {
    const stripe = await getStripe();
    if (!stripe) return;
    toast.loading('Redirecting to Checkout...');

    const { error } = await stripe.redirectToCheckout({
      lineItems: productsInCart,
      submitType: 'pay',
      mode: 'payment',
      successUrl: `${DOMAIN_URL}/?success=true`,
      cancelUrl: `${DOMAIN_URL}?canceled=true`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  };

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="">
          <h2 className="fs-4 fw-semibold text-capitalize">Shopping Cart</h2>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="text-center gap-2 mt-5 d-flex align-items-center flex-column">
            <AiOutlineShopping size={150} />
            <h3 className="fs-3 fw-semibold">Your Cart is Empty</h3>
            <p>Start exploring our amazing products and fill your cart!</p>
            <Button
              size="lg"
              className="px-3 py-2"
              variant="danger"
              href="/store"
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="h-100 position-relative p-2 d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-2 mb-auto mb-sm-5">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="position-absolute bg-light p-1 p-sm-2 rounded bottom-0 start-0 end-0 d-flex flex-column gap-2 mt-auto">
              <Summary title="Total" value={formatCurrency(totalCost)} />
              <Summary title="Shipping" value={formatCurrency(shippingCost)} />
              <Summary title="VAT (included)" value={formatCurrency(vatCost)} />
              <Summary
                title="Grand total"
                value={formatCurrency(grandTotal)}
                className="mt-1"
                colored
              />

              <Button
                variant="warning"
                size="lg"
                className="text-dark fs-5 fw-bold"
                onClick={handleCheckout}
              >
                Pay With Stripe
              </Button>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
