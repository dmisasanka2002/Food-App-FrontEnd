import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext({});

function StoreContextProvider(props) {
  const [cart, setCart] = useState({});
  const [foodList, setFoodList] = useState([]);
  const backendURL = import.meta.env.APP_BACK_URL;

  // display all items
  const fetchFoodList = async () => {
    try {
      const responce = await axios.get(`${backendURL}/api/food/list`);
      setFoodList(responce.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  // set cart
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const prevCart = JSON.parse(localStorage.getItem("cart"));
      setCart(prevCart);
    }
  }, []);

  // set local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(id) {
    if (cart[id]) {
      setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    } else {
      setCart((prev) => ({ ...prev, [id]: 1 }));
    }
  }

  function removeFromCart(id) {
    if (cart[id] == 1) {
      delete cart[id];
      setCart((prev) => ({ ...prev }));
    } else {
      setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  }

  function getTotalItemCart() {
    let total = 0;
    Object.values(cart).map((count) => {
      total += count;
    });

    return total;
  }

  function getTotalPriceOfCart(id) {
    let total = 0;

    for (const item in cart) {
      let itemInfo = foodList.find((product) => product._id === item);
      total += itemInfo.price * cart[item];
    }
    return total;
  }

  const values = {
    backendURL,
    foodList,
    addToCart,
    removeFromCart,
    getTotalItemCart,
    getTotalPriceOfCart,
    cart,
  };
  return (
    <StoreContext.Provider value={values}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
