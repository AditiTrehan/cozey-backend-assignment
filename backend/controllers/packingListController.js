const { findProduct } = require("../models/productModel");

function generatePackingList(ordersData) {
  const packingList = ordersData.map((order) => {
    const { orderId, orderDate, shippingAddress, lineItems, customerName } =
      order;

    const formattedLineItems = lineItems.map((item) => {
      const { productName, quantity } = item;
      const subItems = findProduct(productName, quantity); //Mapping through line items to find product items
      return { productName, quantity, subItems };
    });

    return {
      orderId,
      orderDate,
      shippingAddress,
      customerName,
      lineItems: formattedLineItems,
    };
  });

  return packingList;
}

module.exports = { generatePackingList };
