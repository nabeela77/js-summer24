import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNotification } from "./NotificationContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [total, setTotal] = useState(0);
  const { addNotification } = useNotification();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    recalculateTotal();
  }, [cart]);

  const addToCart = (product) => {
    try {
      setCart((prevCart) => {
        return prevCart.find((item) => item.id === product.id)
          ? prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...prevCart, { ...product, quantity: 1 }];
      });
      addNotification("item added to cart", "success");
    } catch {
      addNotification("Something went wrong", "error");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const updateCartItemQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const recalculateTotal = useCallback(() => {
    const newtotal = cart.reduce(
      (itemTotal, item) => itemTotal + item.price * item.quantity,
      0
    );
    setTotal(newtotal.toFixed(2));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
