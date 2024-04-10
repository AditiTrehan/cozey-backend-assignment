"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const apiBaseUrl = process.env.API_BASE_URL;
  const [orders, setOrders] = useState([]);
  const [pickingList, setPickingList] = useState([]);
  const [packingList, setPackingList] = useState([]);

  useEffect(() => {
    fetchOrders();
    generatePickingList();
    generatePackingList();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const generatePickingList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/picking-list`
      );
      setPickingList(response.data);
    } catch (error) {
      console.error("Error generating picking list:", error);
    }
  };
  const generatePackingList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/packing-list`
      );
      setPackingList(response.data);
    } catch (error) {
      console.error("Error generating packing list:", error);
    }
  };

  return (
    <>
      <div className="mx-auto px-8 py-4 text-lg">
        Warehouse Management System
      </div>
      <div className="mx-auto px-4 py-4 flex flex-row">
        <div className="px-4">
          <h2>
            <b>Orders</b>
          </h2>
          <ul>
            {orders.map((order) => (
              <li key={order.orderId}>
                <p>Order ID: {order.orderId}</p>
                <p>Order Date: {order.orderDate}</p>
                <p>Customer Name: {order.customerName}</p>
                <p>Customer Email: {order.customerEmail}</p>
                <p>
                  Order Items:{" "}
                  {order.lineItems.map((item) => (
                    <ul>
                      <li key={item}>Product Name: {item.productName}</li>
                      <li key={item}>Product Price: ${item.price}</li>
                    </ul>
                  ))}
                </p>
                <p>Order Total: ${order.orderTotal}</p>
                ========================================
                {/* Display other order details */}
              </li>
            ))}
          </ul>
        </div>
        <div class="px-4 grow">
          <h2>
            <b>Picking List</b>
          </h2>
          <ul>
            {pickingList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div class="px-4">
          <h2>
            <b>Packing List</b>
          </h2>
          <ul>
            {packingList.map((order) => (
              <li key={order.orderId}>
                <p>Order ID: {order.orderId}</p>
                <p>Order Date: {order.orderDate}</p>
                <p>Shipping Address: {order.shippingAddress}</p>
                <ul>
                  {order.lineItems.map((item) => (
                    <li key={item.productName}>
                      {item.productName} - Quantity: {item.quantity}
                      {item.subItems.map((subItem) => (
                        <ul>
                          <li key={subItem}>{subItem}</li>
                        </ul>
                      ))}
                    </li>
                  ))}
                </ul>
                ================
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
