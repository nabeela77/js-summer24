import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    recalculateTotal();
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      return prevCart.find((item) => item.id === product.id)
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
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
