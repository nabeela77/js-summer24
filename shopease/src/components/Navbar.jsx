import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="w-full flex justify-end space-x-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>

        <ul className="w-full flex justify-end space-x-4">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
