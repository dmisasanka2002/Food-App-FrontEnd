import React, { useContext } from "react";
import "./CartBill.css";
import { StoreContext } from "../Contexts/StoreContext";

function CartBill(props) {
  const { getTotalPriceOfCart } = useContext(StoreContext);

  return (
    <>
      <>
        <h3>Cart Totals</h3>
        <div className="subTotal">
          <h4>Sub Total</h4>
          <p>${getTotalPriceOfCart()}</p>
        </div>
        <hr />
        <div className="delivery">
          <h4>Delivery Fee</h4>
          <p>$2</p>
        </div>
        <hr />
        <div className="total">
          <h4>Total</h4>
          <p>${getTotalPriceOfCart() + 2}</p>
        </div>
        {/* <input type="submit" value="Proceed to Payment" /> */}
      </>
      {props.children}
    </>
  );
}

export default CartBill;
