import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); //q
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (loading)
    return <div className="text-center text-lg">Loading product...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
        <div>
          <h2 className="text-3xl font-bold text-emphasis">{product.title}</h2>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mt-4">
            ${product.price}
          </p>
          <button
            //Missing handler
            onClick={addToCart}
            className="btn-primary mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
