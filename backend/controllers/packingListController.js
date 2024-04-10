const { findProduct } = require("../models/productModel");

function generatePackingList(ordersData) {
  const packingList = ordersData.map((order) => {
    const { orderId, orderDate, shippingAddress, lineItems } = order;

    const formattedLineItems = lineItems.map((item) => {
      const { productName, quantity } = item;
      const subItems = findProduct(productName, quantity);
      return { productName, quantity, subItems };
    });

    return {
      orderId,
      orderDate,
      shippingAddress,
      lineItems: formattedLineItems,
    };
  });

  return packingList;
}

module.exports = { generatePackingList };
