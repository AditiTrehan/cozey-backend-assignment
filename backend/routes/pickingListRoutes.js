const express = require("express");
const router = express.Router();
const { generatePickingList } = require("../controllers/pickingListController");
const fs = require("fs");

const ordersData = JSON.parse(fs.readFileSync("./data/orders.json", "utf-8"));
const productsData = JSON.parse(
  fs.readFileSync("./data/products.json", "utf-8")
);

router.get("/", (req, res) => {
  const pickingList = generatePickingList(ordersData, productsData);
  res.json(pickingList);
});

module.exports = router;
