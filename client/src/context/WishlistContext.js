// WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    // Check if the item is already in the cart
    const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.name === item.name);

    if (!isItemInWishlist) {
      setWishlistItems([...wishlistItems, item]);
    } 
    // If the item is already in the cart, you may want to handle this case differently, e.g., show a message
  };
  const removeFromWishlist = (index) => {
    const newWishlistItems = [...wishlistItems];
    newWishlistItems.splice(index, 1);
    setWishlistItems(newWishlistItems);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
