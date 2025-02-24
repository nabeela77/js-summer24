import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading)
    return <div className="text-center text-lg">Loading products...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-emphasis mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              //missing tag required to show images
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
            <p className="text-blue-500 font-bold">${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="btn-primary block mt-4 text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
