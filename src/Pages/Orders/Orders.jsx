import React, { useEffect, useState } from "react";
import Order from "../../Components/Order/Order";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const backendURL = import.meta.env.APP_BACK_URL;
  const [orderList, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const responce = await axios.get(`${backendURL}/api/order/user`, {
        headers: { Authorization: token },
      });
      if (responce.data.sucess) {
        setOrders(responce.data.orders);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <h3>Your Orders</h3>
      <Order orderList={orderList.reverse()} />
    </>
  ); // reverse - new orders become 1st element
}

export default Orders;
