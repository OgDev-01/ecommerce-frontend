import { navState, searchToggle } from "@/base/context/Atoms/atomstate";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Links from "../../atoms/Link";
import * as styles from "./styles.module.scss";

export const Header = () => {
  const setIsOpen = useSetRecoilState(navState);
  const setToggleSearch = useSetRecoilState(searchToggle);
  const router = useRouter();
  const homePage = router.pathname === "/";
  return (
    <header className={`${styles.wrapper} ${homePage ? "grey" : "light"}`}>
      <div className='container'>
        <div className={styles.headContents}>
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <img src='images/icons/Menu.svg' alt='hamburger' />
          </div>
          <div className={styles.logo}>
            <Links path='/'>
              <img src='images/vectors/Logo.svg' alt='brand logo' />
            </Links>
          </div>
          <div className={styles.iconsWrap}>
            <span onClick={() => setToggleSearch((prev) => !prev)}>
              <img src='images/icons/Search.svg' alt='search icon' />
            </span>

            <Links path='/cart'>
              <img src='images/icons/shopping-bag.svg' alt='shopping bag' />
            </Links>
          </div>
        </div>
      </div>
    </header>
  );
};
