import {
  navState,
  searchToggle,
  cartState,
} from "@/base/context/Atoms/atomstate";
import { cartCountSelector } from "@/base/context/Selectors/selectors";
import CartCount from "@/components/atoms/CartCount";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Links from "../../atoms/Link";
import * as styles from "./styles.module.scss";

export const Header = () => {
  const setIsOpen = useSetRecoilState(navState);
  const setToggleSearch = useSetRecoilState(searchToggle);
  const setCartOpen = useSetRecoilState(cartState);
  const cartCount = useRecoilValue(cartCountSelector);
  const router = useRouter();
  const homePage = router.pathname === "/";

  return (
    <header className={`${styles.wrapper} ${homePage ? "grey" : "light"}`}>
      <div className='container'>
        <div className={styles.headContents}>
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <img src='/images/icons/Menu.svg' alt='hamburger' />
          </div>
          <div className={styles.logo}>
            <Links path='/'>
              <img src='/images/vectors/Logo.svg' alt='brand logo' />
            </Links>
          </div>
          <div className={styles.iconsWrap}>
            <span onClick={() => setToggleSearch((prev) => !prev)}>
              <img src='/images/icons/Search.svg' alt='search icon' />
            </span>

            <span
              style={{ position: "relative" }}
              onClick={() => setCartOpen((prev) => !prev)}
            >
              {cartCount > 0 && (
                <span className={styles.cartNum}>
                  <CartCount>{cartCount}</CartCount>
                </span>
              )}
              <img src='/images/icons/shopping-bag.svg' alt='shopping bag' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
