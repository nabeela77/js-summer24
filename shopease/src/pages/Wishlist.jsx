import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-lg">
          Your wishlist is empty{" "}
          <Link to="/products" className="text-blue-500 underline">
            Shop your favorite products.
          </Link>
        </p>
      ) : (
        <div>
          <ul className="space-y-4">
            {wishlist.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span className="font-semibold text-lg">{item.title}</span>

                  <div className="flex items-center gap-4">
                    <button
                      className=" text-red-500 px-4 py-2  hover:bg--600"
                      onClick={() => {
                        removeFromWishlist(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
