import { selector } from "recoil";
import { cartItemsState } from "../Atoms/atomstate";

export const cartCountSelector = selector({
  key: "cartCount",
  get: ({ get }) => get(cartItemsState).length,
});
