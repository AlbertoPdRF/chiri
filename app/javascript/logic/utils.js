export const groupProducts = (products) => {
  const productsGroups = {};
  const groupedProducts = [];

  products.forEach((product) => {
    if (!productsGroups[product.category]) {
      productsGroups[product.category] = [];
      groupedProducts.push({
        category: product.category,
        products: productsGroups[product.category],
      });
    }
    productsGroups[product.category].push(product);
  });

  return groupedProducts;
};
