function generatePickingList(ordersData, productsData) {
  return (
    ordersData
      .flatMap((order) =>
        // Mapping lineItems with product items
        order.lineItems.flatMap(
          (lineItem) =>
            productsData
              .find((product) => product.productId === lineItem.productId)
              ?.items?.map((item) => ({
                item,
                quantity: lineItem.quantity,
              })) ?? []
        )
      )
      // Calculating each product item quantity
      .reduce((acc, item) => {
        const existingItem = acc.find(
          (existing) => existing.item === item.item
        );
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
  );
}

module.exports = { generatePickingList };
