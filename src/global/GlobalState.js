import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [logout, setLogout] = useState(token ? "Sair" : "");
  const [cart, setCart] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

  const addToCart = (product, quantity, restaurant = null) => {
    const updateProduct = {
      ...product,
      quantity: quantity,
    };

    const isSameRestaurant = restaurant?.id === selectedRestaurant?.id;

    if (cart.length > 0 && !isSameRestaurant) {
      let confirm = window.confirm(
        "Você deseja limpar o carrinho anterior e adicionar esse item?"
      );

      if (confirm) {
        setSelectedRestaurant(restaurant);
        return setCart([updateProduct]);
      } else {
        return (confirm = false);
      }
    }

    setSelectedRestaurant(restaurant);

    const isInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (isInCart) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return updateProduct;
        } else {
          return productInCart;
        }
      });

      setCart(newCart);
    } else {
      const updateCart = [...cart, updateProduct];
      setCart(updateCart);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    setCart(newCart);
    if (cart.length === 1) {
      setSelectedRestaurant(undefined);
    }
  };

  const data = {
    token,
    logout,
    setLogout,
    selectedRestaurant,
    cart,
    setCart,
    addToCart,
    removeItemFromCart,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
