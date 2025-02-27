import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const navigate = useNavigate();

  const handlechange = (e) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };
  return (
    <div className="p-6 maw-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handlechange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={form.address}
            onChange={handlechange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handlechange}
            className="border p-2 mb-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
