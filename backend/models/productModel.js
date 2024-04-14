const fs = require("fs");

const productsData = JSON.parse(
  fs.readFileSync("./data/products.json", "utf-8")
);

function findProduct(productName, quantity) {
  const product = productsData.find(
    (product) => product.productName === productName //Matching product names to map orders data and products data
  );
  if (product) {
    //Returning product's items data with quantity
    return product.items.map((productItem) => `${productItem} x ${quantity}`);
  }
  return [];
}

module.exports = { findProduct };
