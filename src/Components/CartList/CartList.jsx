import React, { useContext } from "react";
import CartButton from "../CartButtons/CartButton";
import "./CartList.css";
import { StoreContext } from "../Contexts/StoreContext";

function CartList() {
  const { foodList, cart } = useContext(StoreContext);
  console.log(cart);
  const backendURL = import.meta.env.APP_BACK_URL;

  return (
    <div className="cart-list">
      {Object.entries(cart).map((item, index) => {
        const food = foodList.find((food) => food._id === item[0]);

        const image = `${backendURL}/${food.image}`;
        const name = food.name;
        const pricePerOne = food.price;
        const id = food._id;
        const nbOfItems = cart[id];
        const totalPerItem = pricePerOne * nbOfItems;

        // const image = foodList[item[0] - 1].image;
        // const name = foodList[item[0] - 1].name;
        // const pricePerOne = foodList[item[0] - 1].price;
        // const id = foodList[item[0] - 1]._id;
        // const nbOfItems = cart[id];
        // const totalPerItem = pricePerOne * nbOfItems;

        return (
          <div className="item" key={index}>
            <div className="product-des">
              <img src={image} alt="" />
              <div className="des">
                <div>
                  <h3>{name}</h3>
                </div>
              </div>
            </div>

            <div className="price-per-one">
              <h3>${pricePerOne}</h3>
            </div>
            <div className="buttns">
              <CartButton id={id} />
            </div>
            <div className="price">
              <h3>${totalPerItem}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
