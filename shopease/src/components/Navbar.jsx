import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-blue-500">
          {" "}
          Home
        </Link>
        <Link to="/products" className="text-blue-500">
          {" "}
          Products
        </Link>
        <Link to="/cart" className="text-blue-500">
          {" "}
          Cart
        </Link>
        <Link to="/login" className="text-blue-500">
          {" "}
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
