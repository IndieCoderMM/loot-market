import { createContext, ReactNode, useContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';
import toast from 'react-hot-toast';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  resetCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'gamezon-cart-1042023',
    [],
  );
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalQuantity = cartItems.reduce((s, i) => s + i.quantity, 0);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: string) {
    setCartItems((current) => {
      if (current.find((item) => item.id === id)) {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...current, { id, quantity: 1 }];
      }
    });
    toast.success('Product added to cart');
  }

  function decreaseQuantity(id: string) {
    setCartItems((current) => {
      if (current.find((item) => item.id === id)?.quantity === 1) {
        return current.filter((item) => item.id !== id);
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    toast.success('Product removed from cart');
  }

  function removeFromCart(id: string) {
    setCartItems((current) => current.filter((item) => item.id !== id));
    toast.success('Product removed from cart');
  }

  function resetCart() {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        resetCart,
        cartItems,
        totalQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
