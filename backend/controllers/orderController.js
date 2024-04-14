const fs = require("fs");

const ordersData = JSON.parse(fs.readFileSync("./data/orders.json", "utf-8"));

function getAllOrders(req, res) {
  //Fetching all orders
  res.json(ordersData);
}

module.exports = { getAllOrders };
