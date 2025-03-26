import React, { createContext, useState, useContext } from "react";
import { useNotification } from "./NotificationContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saveToWishlist = localStorage.getItem("wishlist"); //saving item to local storage
    return saveToWishlist ? JSON.parse(saveToWishlist) : []; //JS object or empty array
  });
  const { addNotification } = useNotification();
  //   useEffect(() => {
  //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
  //   }, [wishlist]);

  const addToWishlist = (product) => {
    try {
      const newWishlist = wishlist.find((item) => item.id === product.id)
        ? wishlist
        : [...wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      addNotification("item added to wishlist", "success");
    } catch {
      addNotification("Something went wrong", "error");
    }
  };

  const removeFromWishlist = (productId) => {
    const newWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };
  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
