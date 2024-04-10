const { findProduct } = require("../models/productModel");

function generatePickingList(ordersData) {
  const pickingList = ordersData.flatMap((order) =>
    order.lineItems.map((item) => item.productName)
  );
  const itemCounts = pickingList.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const subItems = Object.entries(itemCounts).flatMap(
    ([productName, quantity]) => findProduct(productName, quantity)
  );

  return subItems;
}

module.exports = { generatePickingList };
