import React from "react";
import "./Order.css";
import { assets } from "../../assets/frontend_assets/assets";

function Order({ orderList }) {
  // get the products of each order.
  const getProductList = (list) => {
    const item = list.map((items) => {
      return `${items[0]} : ${items[1]}, `;
    });
    return item;
  };

  // change the status of the order
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <>
      {orderList.map((item, index) => {
        return (
          <div className="order-container" key={index}>
            <div className="icon">
              <div>
                <img src={assets.parcel_icon} alt="parcel icon" />
              </div>
              <img src={assets.selector_icon} alt="" id="selecter" />
            </div>
            <div className="products">
              <div>
                <p>{getProductList(Object.entries(item.items))}</p>
              </div>
            </div>
            <div className="address">
              <div>
                <p>{item.address}</p>
              </div>
            </div>
            <div className="status">
              <div>
                <p>Processing</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Order;
