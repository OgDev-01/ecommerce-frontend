import { selector } from 'recoil';
import {
  cartItemsState,
  filterValueState,
  productsState,
} from '../Atoms/atomstate';

export const cartCountSelector = selector({
  key: 'cartCount',
  get: ({ get }) => get(cartItemsState).length,
});

export const filterResultSelector = selector({
  key: 'filterResult',
  get: ({ get }) => {
    const result = get(filterValueState);
    const products = get(productsState);

    return products.filter((product) =>
      product.categories.name.includes(result)
    );
  },
});
