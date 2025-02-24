import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-6">
      <div className="bg-blue-500 text-white text-center p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-emphasis">
          Welcome to ShopEase
        </h1>
        <p className="mt-4 text-lg">
          Your favorite online store. Get the best deals today!
        </p>
        <Link
          to="/products"
          className="bg-white font-bold py-2 px-4 rounded text-center mt-6 inline-block text-white"
        >
          Explore Products
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                // An important attribute is missing
                className="bg-white p-4 shadow-lg rounded-lg"
              >
                {/*Complete the missing information to render all the products  */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 mx-auto object-contain mb-4"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-blue-500 font-bold">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn-primary block mt-4 text-center"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
