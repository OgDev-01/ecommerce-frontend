import { cartState } from "@/base/context/Atoms/atomstate";
import { cartCountSelector } from "@/base/context/Selectors/selectors";
import Button from "@/components/atoms/button";
import CartCount from "@/components/atoms/CartCount";
import CartItemCard from "@/components/atoms/CartItemCard";
import { useSetRecoilState, useRecoilValue } from "recoil";
import * as styles from "./styles.module.scss";
export const Cart = () => {
  const setCartOpen = useSetRecoilState(cartState);
  const cartCount = useRecoilValue(cartCountSelector);
  const buttonProps = {
    text: ["buy now", "continue shopping"],
    variants: "full-width",
    urlPath: ["/checkout", "/products"],
    icon: {
      position: "left",
      url: "/images/icons/shopping-bag-light.svg",
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div onClick={() => setCartOpen((prev) => !prev)}>
          <img src='/images/icons/Close.svg' alt='close icon' />
        </div>
        <div className={`${styles.cartHead} flex justify-between align-center`}>
          <h3>Cart</h3>
          <CartCount>{cartCount}</CartCount>
        </div>
        <div className={styles.cartItemWrap}>
          {cartCount > 0 && <CartItemCard />}

          {!cartCount && <span>You have no items in your Shopping Bag.</span>}
          {cartCount > 0 && (
            <div className={styles.sumWrap}>
              <div className='flex justify-between align-center'>
                <h4>Sub Total</h4>
                <p>$240</p>
              </div>
              <div className={styles.notice}>
                shipping charges, taxes and discount codes are calculated at the
                time of accounting.
              </div>
            </div>
          )}
        </div>
      </div>
      <Button
        text={cartCount > 0 ? buttonProps.text[0] : buttonProps.text[1]}
        urlPath={
          cartCount > 0 ? buttonProps.urlPath[0] : buttonProps.urlPath[1]
        }
        variants={buttonProps.variants}
        icon={buttonProps.icon}
      />
    </div>
  );
};
