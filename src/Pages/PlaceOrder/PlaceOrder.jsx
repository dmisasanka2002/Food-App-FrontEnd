import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import CartBill from "../../Components/CartBill/CartBill";
import DeliveryInfo from "../../Components/DeliveryInfo/DeliveryInfo";
import axios from "axios";
import { StoreContext } from "../../Components/Contexts/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const backendURL = import.meta.env.APP_BACK_URL;
  const navigate = useNavigate();
  const { cart } = useContext(StoreContext);

  const [address, setAddress] = useState("");
  const [deliveryData, setDeliveryData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });
  const [orderData, setOrderData] = useState({
    items: cart,
    address: "",
    option: "",
  });
  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      const responce = await axios.post(
        `${backendURL}/api/order/new`,
        orderData,
        { headers: { Authorization: token } }
      );
      if (responce.data.sucess) {
        navigate("/orders/my");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const handleOptions = (e) => {
    setOrderData((prev) => ({ ...prev, option: e.target.value }));
    console.log(orderData);
  };
  const handleSubmit = (e) => {
    setAddress(Object.values(deliveryData).join());
    setOrderData((prev) => ({ ...prev, address: address }));
    console.log(orderData);
    placeOrder();
  };

  return (
    <div className="form-container">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <>
          <DeliveryInfo setDeliveryData={setDeliveryData} />
        </>

        <div className="right-bottom-panel">
          <CartBill>
            <div>
              <input
                type="radio"
                name="options"
                id="cod"
                value="cod"
                required
                onChange={(e) => handleOptions(e)}
              />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
            <div>
              <input
                type="radio"
                name="options"
                id="online"
                value="online"
                required
                onChange={(e) => handleOptions(e)}
              />
              <label htmlFor="online">Online Payment</label>
            </div>

            <input type="submit" value="Proceed to Payment" />
          </CartBill>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
