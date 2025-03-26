import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, updateUser } = useAuth();
  const [updatedEmail, setUpdatedEmail] = useState(user?.email || "");

  const handlesubmit = (e) => {
    e.preventDefault();
    updateUser({ email: updatedEmail });
  };
  return (
    <div className="p-6 maw-w-lg mx-auto">
      <div className="text-3xl font-semibold mb-6"> Dashboard</div>
      <p className="mb-2"> Email: {user.email}</p>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          UpdateEmailInfo
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
