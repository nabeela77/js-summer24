import { useState, useEffect, useMemo } from "react";
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

const Cart = () => {
  const { cart, updateCartItemQuantity, removeFromCart, total } = useCart();

  // const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   const newTotal = cart.reduce(
  //     (itemTotal, item) => itemTotal + item.price * item.quantity,
  //     0
  //   );
  //   setTotalPrice(newTotal);
  // }, [cart]);

  const checkoutLink = cart.length === 0 ? "/products" : "/checkout";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg">
          Your cart is empty{" "}
          <Link to="/products" className="text-blue-500 underline">
            Continue Shopping
          </Link>
        </p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span className="font-semibold text-lg">{item.title}</span>

                  <div className="flex items-center gap-4">
                    <button
                      className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                      onClick={() => {
                        updateCartItemQuantity(item.id, item.quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                      onClick={() => {
                        updateCartItemQuantity(item.id, item.quantity + 1);
                      }}
                    >
                      +
                    </button>
                    <span className="text-lg">
                      {item.price * item.quantity}
                    </span>
                    <button
                      className=" text-red-500 px-4 py-2  hover:bg--600"
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <h2 className="text-xl font-semibold mt-4">Total: ${total}</h2>

      <Link
        to={checkoutLink}
        className="bg-white-500 text-white py-2 px-6 rounded-lg hover:bg-white-600 mt-4 block text-center"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default Cart;
