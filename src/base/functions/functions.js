import axios from 'axios';
import { getRecoil, setRecoil } from 'recoil-nexus';
import {
  cartItemsState,
  favoriteState,
  productsState,
} from '../context/Atoms/atomstate';
// products related functions
export const filterProductByCategory = (categoryName) => {
  const products = getRecoil(productsState);
  if (categoryName === 'All') return products;
  return products.filter((product) =>
    product.productCategories.some((cat) => cat.name.includes(categoryName))
  );
};
export const filterProductsByPrice = (priceRange) => {};
export const filterProductByName = (productName) => {};

//  Cart and Favorite related functions
export const handleFavoriteUpdate = (item) => {
  const products = getRecoil(productsState);
  const favorite = getRecoil(favoriteState);
  const initialItem = products.filter((product) => product.slug === item);

  if (favorite.length === 0) {
    setRecoil(favoriteState, initialItem);
    return;
  } else {
    const exist = favorite.find((item) => item.slug === initialItem[0].slug);
    if (exist)
      setRecoil(
        favoriteState,
        favorite.filter((item) => item.slug !== initialItem[0].slug)
      );
    if (!exist) setRecoil(favoriteState, [...favorite, initialItem[0]]);
  }
};

export const handleAddToCart = (slug) => {
  const products = getRecoil(productsState);
  const cart = getRecoil(cartItemsState);
  const initialItem = products.find((product) => product.slug === slug);
  const exist = cart.find((item) => item.slug === initialItem.slug);
  if (exist) {
    setRecoil(
      cartItemsState,
      cart.map((item) =>
        item.slug === exist.slug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setRecoil(cartItemsState, [...cart, { ...initialItem, quantity: 1 }]);
  }
};
export const handleRemoveFromCart = (slug) => {
  const cart = getRecoil(cartItemsState);
  setRecoil(
    cartItemsState,
    cart.filter((item) => item.slug !== slug)
  );
};
export const incrementQuantity = (slug) => {
  const cart = getRecoil(cartItemsState);
  setRecoil(
    cartItemsState,
    cart.map((item) =>
      item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};
export const decrementQuantity = (slug) => {
  const cart = getRecoil(cartItemsState);
  setRecoil(
    cartItemsState,
    cart.map((item) =>
      item.slug === slug
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
  );
};

// RESTapi fetcher function
export async function fetcher(...args) {
  const { data } = await axios.get(...args);
  return data;
}
