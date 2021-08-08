import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import Swal from 'sweetalert2'

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


    if ((cart.length > 0) && !isSameRestaurant) {
      Swal.fire({
        title: "Você deseja limpar o carrinho anterior e adicionar esse item?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Sim`,
        denyButtonText: `Não`,
      }).then((result) => {
        if (result.isConfirmed) {
          setSelectedRestaurant(restaurant)
          setCart([updateProduct])
          Swal.fire("Produtos Removidos!");
        } else if (!result.isConfirmed) {
          Swal.fire("Seus produtos ainda estão no seu carrinho");
        }
      });
      return
    }

    setSelectedRestaurant(restaurant)

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
