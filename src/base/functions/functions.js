import axios from "axios";
import useSWR from "swr";
// products related functions
export const filterProductByCategory = (categoryName, products) => {};
export const filterProductsByPrice = (priceRange, products) => {};
export const filterProductByName = (productName, products) => {};
export async function fetcher(...args) {
  const { data } = await axios.get(...args);
  return data;
}
