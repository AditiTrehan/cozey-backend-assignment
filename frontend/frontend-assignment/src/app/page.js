"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const apiBaseUrl = "http://localhost:8080/api";
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
      const response = await axios.get(`${apiBaseUrl}/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const generatePickingList = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/picking-list`);
      setPickingList(response.data);
    } catch (error) {
      console.error("Error generating picking list:", error);
    }
  };
  const generatePackingList = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/packing-list`);
      setPackingList(response.data);
    } catch (error) {
      console.error("Error generating packing list:", error);
    }
  };

  return (
    <>
      <p className="mx-auto px-8 py-4 text-2xl font-bold">
        Warehouse Management System
      </p>
      <div className="mx-auto px-4 py-4 flex flex-row divide-x">
        <div className="px-4 py-4 bg-red-200 rounded-md">
          <p className="text-xl font-bold">Orders</p>
          <ul className="divide-y-2 divide-dashed divide-black">
            {orders
              ? orders.map((order) => (
                  <li className="pt-2" key={order.orderId}>
                    <p>Order ID: {order.orderId}</p>
                    <p>Order Date: {order.orderDate}</p>
                    <p>Customer Name: {order.customerName}</p>
                    <p>Customer Email: {order.customerEmail}</p>
                    <p>
                      Order Items:{" "}
                      {order.lineItems.map((item, key) => (
                        <ul key={key}>
                          <li key={item}>Product Name: {item.productName}</li>
                        </ul>
                      ))}
                    </p>
                    <p className="pb-2">Order Total: ${order.orderTotal}</p>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="px-4 py-4 grow bg-orange-200 rounded-md">
          <p className="text-xl font-bold">Picking List</p>
          <div>
            {pickingList
              ? pickingList.map((product, key) => (
                  <div key={key}>
                    <span>{product.item}</span> X{" "}
                    <span>{product.quantity}</span>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="px-4 py-4 grow bg-lime-100 rounded-md">
          <p className="text-xl font-bold">Packing List</p>
          <p className="divide-y-2 divide-dashed divide-black">
            {packingList
              ? packingList.map((order, key) => (
                  <div key={key}>
                    <p className="font-semibold pt-2">
                      Order ID: {order.orderId}
                    </p>
                    <p className="font-semibold pt-2">
                      Order Date: {order.orderDate}
                    </p>
                    <>
                      <p className="font-semibold">Line Items:</p>
                      {order.lineItems.map((item) => (
                        <>
                          <p className="font-medium py-2">
                            {item.productName} X {item.quantity}
                          </p>
                          {item.subItems.map((subItem) => (
                            <p className="italic">{subItem}</p>
                          ))}
                        </>
                      ))}{" "}
                    </>
                    <p className="pb-2">
                      <p className="font-semibold">Ships to:</p>
                      <p>{order.customerName}</p>
                      <p>{order.shippingAddress}</p>
                    </p>
                  </div>
                ))
              : null}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
