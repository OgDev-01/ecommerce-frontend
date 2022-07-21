import { atom } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue =
      typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const navState = atom({
  key: 'navState',
  default: false,
});
export const cartState = atom({
  key: 'cartState',
  default: false,
});
export const searchToggle = atom({
  key: 'searchToggle',
  default: false,
});
export const productDisplayViewState = atom({
  key: 'productDisplayViewState',
  default: true,
});
export const recentSearchState = atom({
  key: 'recentSearch',
  default: [],
});
export const productsState = atom({
  key: 'products',
  default: [],
});
export const blogsState = atom({
  key: 'blogs',
  default: [],
});
export const productCategoriesState = atom({
  key: 'productCategories',
  default: [],
});
export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: 'All',
});
export const blogCategoriesState = atom({
  key: 'blogCategories',
  default: [],
});
export const cartItemsState = atom({
  key: 'cartItems',
  default: [{ food: 'food' }],
});
export const filterValueState = atom({
  key: 'filterValue',
  default: 'new',
});
export const favoriteState = atom({
  key: 'favoriteState',
  default: [],
  effects: [localStorageEffect('favorites')],
});
