const express = require("express");
const router = express.Router();
const fs = require("fs");

const { generatePackingList } = require("../controllers/packingListController");

const ordersData = JSON.parse(fs.readFileSync("./data/orders.json", "utf-8"));

router.get("/", (req, res) => {
  const packingList = generatePackingList(ordersData);
  res.json(packingList);
});

module.exports = router;
