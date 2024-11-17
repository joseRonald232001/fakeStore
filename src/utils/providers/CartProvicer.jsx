import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shopCart, setShopCart] = useState([]);
  const [shopCartisOpen, setShopCartIsOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("shopCart");
    if (storedCart) {
      setShopCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shopCart", JSON.stringify(shopCart));
  }, [shopCart]);

  const addNewItemCart = (product) => {
    const productBody = {
      id: product.id,
      image: product.image,
      title: product.title,
      quantity: 1,
      price: product.price,
    };
    const foundProduct = shopCart.find((item) => item.id === product.id);

    if (!foundProduct) {
      setShopCart((prevCart) => [...prevCart, productBody]);
    } else {
      setShopCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const removeOrDecreaseItemCart = (product) => {
    setShopCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        shopCart,
        addNewItemCart,
        removeOrDecreaseItemCart,
        shopCartisOpen,
        setShopCartIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};




export const useCart = () => {
  return useContext(CartContext);
};
