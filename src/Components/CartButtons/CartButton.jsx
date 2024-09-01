import React, { useContext } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "./CartButton.css";
import { StoreContext } from "../Contexts/StoreContext";

function CartButton(props) {
  const { addToCart, removeFromCart, cart } = useContext(StoreContext);

  return (
    <div className="cart-btns">
      <div
        className={cart[props.id] ? "minus red" : "minus hidden"}
        onClick={() => {
          removeFromCart(props.id);
          // console.log(cart);
        }}
      >
        <FaMinusCircle />
      </div>
      <div className="value">
        <span>{cart[props.id]}</span>
      </div>
      <div
        className={!cart[props.id] ? "plus" : "plus green"}
        onClick={() => {
          addToCart(props.id);
          // console.log(cart);
        }}
      >
        <FaPlusCircle />
      </div>
    </div>
  );
}

export default CartButton;
