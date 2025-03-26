import React, { useState, useEffect } from "react";

const OrderTracking = () => {
  const statuses = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

  const getRandomStatus = () => {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  const [orderId, setOrderId] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const storedOrderId = localStorage.getItem("orderId");

    if (!storedOrderId) {
      console.error("No orderId found in localStorage.");
      return;
    }

    setOrderId(storedOrderId);
    setStatus(getRandomStatus());
  }, []);

  //   const handleClearOrderId = () => {
  //     localStorage.removeItem("orderId");
  //     setOrderId(null);
  //     setStatus("");
  //   };

  if (!orderId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order-tracking-container p-6 max-w-2xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Order Tracking</h2>
      <div className="order-details text-center">
        <p>
          <strong>Order ID:</strong> {orderId}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
      </div>
      {/* <div className="text-center mt-4">
        <button
          onClick={handleClearOrderId}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Clear Order ID
        </button>
      </div> */}
    </div>
  );
};

export default OrderTracking;
