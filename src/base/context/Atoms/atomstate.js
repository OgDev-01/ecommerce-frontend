import { atom } from "recoil";

export const navState = atom({
  key: "navState",
  default: false,
});
export const searchToggle = atom({
  key: "searchToggle",
  default: false,
});
export const recentSearchState = atom({
  key: "recentSearch",
  default: [],
});
export const productsState = atom({
  key: "products",
  default: [],
});
export const blogsState = atom({
  key: "blogs",
  default: [],
});
export const productCategoriesState = atom({
  key: "productCategories",
  default: [],
});
export const blogCategoriesState = atom({
  key: "blogCategories",
  default: [],
});
