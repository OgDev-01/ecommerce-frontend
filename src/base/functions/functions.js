import axios from 'axios';
// products related functions
export const filterProductByCategory = (products, categoryName) => {
  if (categoryName === 'All') return products;
  return products.filter((product) =>
    product.productCategories.some((cat) => cat.name.includes(categoryName))
  );
};
export const filterProductsByPrice = (priceRange, products) => {};
export const filterProductByName = (productName, products) => {};

export async function fetcher(...args) {
  const { data } = await axios.get(...args);
  return data;
}
