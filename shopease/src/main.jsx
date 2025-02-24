import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Add the CartProvider to ensure components can use the context provided from it
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
