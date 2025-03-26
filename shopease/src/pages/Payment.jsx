import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const { cart } = useCart();

  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16 || CVV.length !== 3) {
      setPaymentStatus("error");
      return;
    }

    setPaymentStatus("success");
    const orderId = Math.floor(Math.random() * 10000);
    localStorage.setItem("orderId", orderId);
    console.log(orderId);

    setTimeout(() => {
      navigate(`/order-tracking/${orderId}`);
    }, 2000); //setTimeout is defined only for simulating API call
  };

  useEffect(() => {
    if (cart.length < 1) {
      navigate("/products");
    }
  });

  if (cart.length < 1) {
    return null;
  }

  return (
    <div className="p-6 maw-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>
      {paymentStatus === "success" && <p>Payment was successful</p>}
      {paymentStatus === "error" && <p>Error for payment</p>}

      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Card Number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border p-2 mb-2 w-full"
        />

        <input
          type="text"
          placeholder="CVV"
          required
          value={CVV}
          onChange={(e) => setCVV(e.target.value)}
          className="border p-2 mb-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
