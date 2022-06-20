import React from "react";
import * as styles from "./styles.module.scss";
import Links from "../../atoms/Link";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className='container'>
        <div className={styles.headContents}>
          <div>
            <img src='images/icons/Menu.png' alt='hamburger' />
          </div>
          <div className={styles.logo}>
            <Links path='/'>
              <img src='images/vectors/Logo.png' alt='logo' />
            </Links>
          </div>
          <div className={styles.logos}>
            <span>
              <img src='images/icons/Search.png' alt='search icon' />
            </span>

            <Links path='/cart'>
              <img src='images/icons/shopping-bag.png' alt='shopping bag' />
            </Links>
          </div>
        </div>
      </div>
    </header>
  );
};
