import React, { useContext } from "react";
import "./Cart.css";
import CartList from "../../Components/CartList/CartList";
import PageHeader from "../../Components/PageHeader/PageHeader";
import CartBill from "../../Components/CartBill/CartBill";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Components/Contexts/StoreContext";

function Cart() {
  const navigate = useNavigate();
  const { cart } = useContext(StoreContext);

  return (
    <>
      <PageHeader name="Your Cart" pageName="Cart" />
      <div className="cart-topics">
        <h3>Item Description</h3>
        <h3>Item Price</h3>
        <h3>No. of Items</h3>
        <h3>Total Prise</h3>
      </div>
      <div className="cart">
        <CartList />
      </div>
      <div className={Object.entries(cart).length ? "cart-bill" : "hidden"}>
        <div className="left-top">
          <CartBill>
            <input
              type="submit"
              value="Proceed to Checkout"
              onClick={() => navigate("/orders/place")}
            />
          </CartBill>
        </div>
        <div className="right-bottom">
          <p>If you have promocode enter it here</p>
          <div className="promo-input">
            <input type="text" name="promocode" id="promocode" />
            <input type="button" value="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
