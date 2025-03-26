import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    login(email, password, checked);
  };

  return (
    <div className="p-6 maw-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            id="checked"
            className="mb-2"
          />
          <label htmlFor="checked" className="text-sm">
            {" "}
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
