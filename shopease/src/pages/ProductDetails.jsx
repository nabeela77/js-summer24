import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useNotification } from "../context/NotificationContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToWishlist } = useWishlist();
  const { addNotification } = useNotification;

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
            onClick={() => {
              addToCart(product);
              addNotification("product added to cart", "success");
            }}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Add to Cart
            {""}
          </button>
          {""}
          <button
            //Missing handler
            onClick={() => addToWishlist(product)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
